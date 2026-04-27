'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RecommendationsModal from '@/components/RecommendationsModal';
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
  const [recommendationsOpen, setRecommendationsOpen] = useState(false);

  function handleSelectDay(id: number) {
    setSelectedDay((prev) => (prev === id || id === -1 ? null : id));
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden" dir="rtl">
      <Header onOpenRecommendations={() => setRecommendationsOpen(true)} />
      {recommendationsOpen && (
        <RecommendationsModal onClose={() => setRecommendationsOpen(false)} />
      )}

      {/* ltr wrapper keeps map on left, sidebar on right regardless of RTL */}
      <main className="flex flex-1 flex-col overflow-hidden sm:flex-row" style={{ direction: 'ltr' }}>
        <div className="h-[45vh] flex-shrink-0 sm:h-auto sm:flex-1 overflow-hidden">
          <MapView days={days} selectedDay={selectedDay} onSelectDay={handleSelectDay} />
        </div>
        <div className="flex-1 overflow-y-auto sm:w-[400px] sm:flex-none" style={{ direction: 'rtl' }}>
          <Sidebar days={days} selectedDay={selectedDay} onSelectDay={handleSelectDay} />
        </div>
      </main>
    </div>
  );
}
