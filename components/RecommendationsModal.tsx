'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, UtensilsCrossed, Coffee, ExternalLink, Play } from 'lucide-react';
import { Recommendation, RecommendationCategory } from '@/types';
import { recommendations } from '@/data/recommendations';

const CATEGORIES: { key: RecommendationCategory | 'all'; label: string; icon: React.ReactNode }[] =
  [
    { key: 'all', label: 'הכל', icon: null },
    { key: 'place', label: 'מקומות', icon: <MapPin size={14} /> },
    { key: 'restaurant', label: 'מסעדות', icon: <UtensilsCrossed size={14} /> },
    { key: 'food', label: 'אוכל', icon: <Coffee size={14} /> },
  ];

const CATEGORY_COLORS: Record<RecommendationCategory, string> = {
  place: 'bg-sky-100 text-sky-700 border-sky-200',
  restaurant: 'bg-amber-100 text-amber-700 border-amber-200',
  food: 'bg-emerald-100 text-emerald-700 border-emerald-200',
};

const CATEGORY_LABELS: Record<RecommendationCategory, string> = {
  place: 'מקום',
  restaurant: 'מסעדה',
  food: 'אוכל',
};

function RecommendationCard({ rec }: { rec: Recommendation }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden"
    >
      {rec.imageUrl && (
        <img
          src={rec.imageUrl}
          alt={rec.name}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-stone-800 text-base leading-snug">{rec.name}</h3>
          <span
            className={`shrink-0 text-[11px] font-semibold border rounded-full px-2 py-0.5 ${CATEGORY_COLORS[rec.category]}`}
          >
            {CATEGORY_LABELS[rec.category]}
          </span>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed">{rec.description}</p>

        {(rec.tiktokUrl || rec.linkUrl) && (
          <div className="flex flex-wrap gap-2 pt-1">
            {rec.tiktokUrl && (
              <a
                href={rec.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-[12px] font-semibold text-white hover:bg-zinc-800 transition-colors"
              >
                <Play size={11} className="fill-white" />
                TikTok
              </a>
            )}
            {rec.linkUrl && (
              <a
                href={rec.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-stone-50 px-3 py-1 text-[12px] font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <ExternalLink size={11} />
                {rec.linkLabel || 'קישור'}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface Props {
  onClose: () => void;
}

export default function RecommendationsModal({ onClose }: Props) {
  const [activeCategory, setActiveCategory] = useState<RecommendationCategory | 'all'>('all');

  const filtered =
    activeCategory === 'all'
      ? recommendations
      : recommendations.filter((r) => r.category === activeCategory);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        style={{ zIndex: 900 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8" style={{ zIndex: 901 }} dir="rtl">
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full max-w-4xl flex-col bg-stone-50 rounded-2xl shadow-2xl overflow-hidden"
          style={{ maxHeight: 'calc(100vh - 4rem)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-200 bg-white px-6 py-4">
            <div>
              <h2 className="text-xl font-black text-stone-800">המלצות</h2>
              <p className="text-xs text-stone-500">מקומות, מסעדות ואוכל באזור</p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-stone-500 hover:bg-stone-100 hover:text-stone-800 transition-colors"
              aria-label="סגור"
            >
              <X size={20} />
            </button>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto border-b border-stone-200 bg-white px-6 py-3 scrollbar-none">
            {CATEGORIES.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  activeCategory === key
                    ? 'bg-[#1a6b8a] text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {filtered.length === 0 ? (
              <p className="mt-8 text-center text-sm text-stone-400">אין המלצות בקטגוריה זו</p>
            ) : (
              <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filtered.map((rec) => (
                    <RecommendationCard key={rec.id} rec={rec} />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
