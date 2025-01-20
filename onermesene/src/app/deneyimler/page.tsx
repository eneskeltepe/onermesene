'use client';

import { useState } from 'react';
import Filters from '@/app/components/complaints/Filters';
import ComplaintList from '@/app/components/complaints/ComplaintList';
import { recentComplaints } from '@/app/data/complaints';

export default function ComplaintsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Filters
        onCategoryChange={setSelectedCategory}
        onCityChange={setSelectedCity}
        onSortChange={setSortBy}
      />
      <ComplaintList complaints={recentComplaints} />
    </div>
  );
} 