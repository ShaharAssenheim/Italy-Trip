'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { days } from '@/data/itinerary';

// Leaflet must load client-side only (uses window)
const MapView = dynamic(() => import('@/components/MapView'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-stone-100">
      <div className="flex flex-col items-center gap-3 text-stone-400">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-stone-200 border-t-[#1a6b8a]" />
        <span className="text-sm font-medium">טוען מפה...</span>
      </div>
    </div>
  ),
});

export default function HomePage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  function handleSelectDay(id: number) {
    setSelectedDay((prev) => (prev === id || id === -1 ? null : id));
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden" dir="rtl">
      <Header />

      {/* ltr wrapper keeps map on left, sidebar on right regardless of RTL */}
      <main className="flex flex-1 overflow-hidden" style={{ direction: 'ltr' }}>
        <div className="flex-1 overflow-hidden">
          <MapView days={days} selectedDay={selectedDay} onSelectDay={handleSelectDay} />
        </div>
        <div className="w-[400px] flex-shrink-0 overflow-hidden" style={{ direction: 'rtl' }}>
          <Sidebar days={days} selectedDay={selectedDay} onSelectDay={handleSelectDay} />
        </div>
      </main>
    </div>
  );
}
