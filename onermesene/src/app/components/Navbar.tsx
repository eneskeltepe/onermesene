'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Deneyimler', href: '/sikayetler' },
  { name: 'Deneyim Paylaş', href: '/sikayet-olustur' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fef2f2] to-[#fef2f2]/90 backdrop-blur-sm" />

      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <Image src="/logo.svg" alt="Önermesene Logo" width={32} height={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Önermesene
              </span>
            </Link>
          </div>
          
          {/* Mobil Menü Butonu */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-primary-600 transition-all"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Menüyü aç</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Masaüstü Navigasyon */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-all px-3 py-2 rounded-md hover:bg-primary-50/50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Boş div - simetri için */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/sikayet-olustur"
              className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500 transition-all flex items-center gap-1"
            >
              Deneyimini Paylaş <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobil Menü */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fef2f2]/95 backdrop-blur-sm px-4 py-4 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/logo.svg" alt="Önermesene Logo" width={32} height={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Önermesene
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-primary-600 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menüyü kapat</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-primary-50/50 hover:text-primary-600 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/sikayet-olustur"
                  className="block w-full text-center rounded-md bg-primary-600 px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-primary-500 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Deneyimini Paylaş
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
} 