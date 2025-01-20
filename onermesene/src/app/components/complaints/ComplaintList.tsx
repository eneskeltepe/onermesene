import Link from 'next/link';
import ComplaintCard from '@/app/components/shared/ComplaintCard';
import { Complaint } from '@/app/data/complaints';

interface ComplaintListProps {
  complaints: Complaint[];
}

export default function ComplaintList({ complaints }: ComplaintListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {complaints.map((complaint) => (
        <Link 
          href={`/deneyimler/${complaint.id}`}
          key={complaint.id}
        >
          <ComplaintCard complaint={complaint} />
        </Link>
      ))}
    </div>
  );
} 