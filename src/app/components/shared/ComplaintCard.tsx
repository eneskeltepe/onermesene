import { MapPinIcon, HandThumbUpIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { Complaint } from '@/app/data/complaints';

interface ComplaintCardProps {
  complaint: Complaint;
  className?: string;
}

export default function ComplaintCard({ complaint, className = '' }: ComplaintCardProps) {
  return (
    <div className={`bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-primary-100/20 ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" />
            {complaint.business} - {complaint.city} | {complaint.category}
          </p>
        </div>
        <span className="text-sm text-gray-500">{complaint.date}</span>
      </div>
      <p className="mt-4 text-gray-600">{complaint.content}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <HandThumbUpIcon className="h-4 w-4" /> {complaint.likes}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <ChatBubbleLeftIcon className="h-4 w-4" /> {complaint.comments}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{complaint.author}</span>
        </div>
      </div>
    </div>
  );
} 