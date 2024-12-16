import express from 'express';
import { formidable } from 'formidable';
import path from 'path';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
// Define the directory to store uploaded files
const __dirname = path.resolve();
const uploadPath = path.join(__dirname, 'EventThumbnails');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

app.post('/upload-image', (req, res) => {
  const form = formidable({
    uploadDir: uploadPath, // Directory to save the uploaded files
    keepExtensions: true, // Keep file extensions
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ error: 'Failed to upload file' });
    }

    // Extract eventUid and the uploaded file
    const eventUid = fields.eventUid?.[0]; // Extract eventUid from fields
    const uploadedFile = files.image?.[0]; // Extract the uploaded file object

    if (!eventUid || !uploadedFile) {
      return res.status(400).json({ error: 'Missing eventUid or file' });
    }

    // Generate the new file path using eventUid
    const newFilePath = path.join(uploadPath, `${eventUid}${path.extname(uploadedFile.originalFilename)}`);

    // Rename the file
    fs.rename(uploadedFile.filepath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error('Error renaming file:', renameErr);
        return res.status(500).json({ error: 'Failed to save file with the eventUid' });
      }

      console.log(`File saved with name: ${newFilePath}`);
      res.status(200).json({ message: 'File uploaded successfully', filename: `${eventUid}${path.extname(uploadedFile.originalFilename)}` });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
