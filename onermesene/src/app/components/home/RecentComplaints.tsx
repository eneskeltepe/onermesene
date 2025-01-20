import Link from 'next/link';
import ComplaintCard from '@/app/components/shared/ComplaintCard';
import { recentComplaints } from '@/app/data/complaints';

export default function RecentComplaints() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Son Şikayetler</h2>
        <Link href="/deneyimler" className="text-primary-600 hover:text-primary-500 flex items-center gap-1">
          Tümünü Gör <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {recentComplaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint} />
        ))}
      </div>
    </div>
  );
} 