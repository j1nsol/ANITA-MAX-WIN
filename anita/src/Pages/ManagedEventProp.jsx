import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ManagedEventCardProps {
  id: string;
  title: string;
  organization: string;
  description: string;
  thumbnailPath: string;
  volunteerCount: number;
  onEventPanelClick: (eventId: string) => void;
}

export default function ManagedEventCard({
  id,
  title,
  organization,
  description,
  thumbnailPath,
  volunteerCount,
  onEventPanelClick,
}: ManagedEventCardProps) {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-md mb-4">
      <div className="flex p-4 gap-4">
        <div className="flex-shrink-0">
          {thumbnailPath ? (
            <Image
              src={thumbnailPath || "/placeholder.svg"}
              alt={title}
              width={150}
              height={150}
              className="object-cover rounded-md"
            />
          ) : (
            <div className="w-[150px] h-[150px] bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold uppercase">{title}</h3>
          <h4 className="text-lg text-gray-700">{organization}</h4>
          <p className="text-sm text-gray-600 mt-2 line-clamp-4">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase font-semibold text-gray-600">Volunteers</span>
          <span className="text-2xl font-bold">{volunteerCount.toString().padStart(2, '0')}</span>
        </div>
        <Button 
          onClick={() => onEventPanelClick(id)}
          className="bg-gray-800 hover:bg-gray-700 text-white"
        >
          Event Panel
        </Button>
      </div>
    </div>
  );
}