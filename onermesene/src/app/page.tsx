import Gradient from '@/app/components/shared/Gradient';
import Hero from '@/app/components/home/Hero';
import Stats from '@/app/components/home/Stats';
import Features from '@/app/components/home/Features';
import RecentComplaints from '@/app/components/home/RecentComplaints';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef2f2] via-[#fef2f2] to-[#fff5f5] overflow-hidden">
      <div className="relative isolate">
        <Gradient position="top" />
        <Gradient position="middle" className="top-[35%]" />
        
        <Hero />
        <Stats />
        <Features />
        <RecentComplaints />

        <Gradient position="bottom" />
      </div>
    </div>
  );
}
