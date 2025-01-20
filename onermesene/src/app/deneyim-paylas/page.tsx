'use client';

import { useState } from 'react';
import Gradient from '@/app/components/shared/Gradient';
import BusinessInfo from '@/app/components/create-complaint/BusinessInfo';
import ComplaintContent from '@/app/components/create-complaint/ComplaintContent';
import ImageUpload from '@/app/components/create-complaint/ImageUpload';

export default function CreateComplaintPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    city: '',
    address: '',
    title: '',
    content: '',
    author: '',
    images: [] as File[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API entegrasyonu
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef2f2] via-[#fef2f2] to-[#fff5f5] overflow-hidden">
      <div className="relative isolate">
        <Gradient position="top" />
        <Gradient position="middle" className="top-1/3" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Üst Başlık */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Deneyimini Paylaş</h1>
            <p className="mt-2 text-gray-600">
              Yaşadığınız kötü deneyimi detaylı bir şekilde anlatın ve toplumu bilinçlendirin.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <BusinessInfo
              onBusinessNameChange={(value) => setFormData(prev => ({ ...prev, businessName: value }))}
              onCategoryChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              onCityChange={(value) => setFormData(prev => ({ ...prev, city: value }))}
              onAddressChange={(value) => setFormData(prev => ({ ...prev, address: value }))}
            />

            <ComplaintContent
              onTitleChange={(value) => setFormData(prev => ({ ...prev, title: value }))}
              onContentChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
              onAuthorChange={(value) => setFormData(prev => ({ ...prev, author: value }))}
            />

            <ImageUpload
              onImagesChange={(files) => setFormData(prev => ({ ...prev, images: Array.from(files) }))}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Deneyimi Paylaş
              </button>
            </div>
          </form>
        </div>

        <Gradient position="bottom" />
      </div>
    </div>
  );
} 