import express from 'express';
import { formidable } from 'formidable';
import path from 'path';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 5001;

app.use(cors());

// Define the directory to store uploaded files
const __dirname = path.resolve();
const uploadPath = path.join(__dirname, 'UploadedDocuments');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Define the endpoint for uploading documents or PDFs
app.post('/upload-document', (req, res) => {
  const form = formidable({
    uploadDir: uploadPath,  // Directory to save the uploaded files
    keepExtensions: true,   // Keep file extensions
    maxFileSize: 20 * 1024 * 1024, // Max file size (20MB)
    filter: (part) => {
      // Allow only PDF and document files
      const allowedMimeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedMimeTypes.includes(part.mimetype)) {
        return true;  // Allow PDF/Word files
      }
      return false; // Reject other file types
    }
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ error: 'Failed to upload file' });
    }

    // Extract uploaded file
    const uploadedFile = files.document?.[0]; // Extract the uploaded file object

    if (!uploadedFile) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Generate the new file path using the original file name
    const newFilePath = path.join(uploadPath, uploadedFile.originalFilename);

    // Rename the file if necessary or just move it
    fs.rename(uploadedFile.filepath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error('Error renaming file:', renameErr);
        return res.status(500).json({ error: 'Failed to save the document' });
      }

      console.log(`File saved with name: ${newFilePath}`);
      res.status(200).json({ message: 'Document uploaded successfully', filename: uploadedFile.originalFilename });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
