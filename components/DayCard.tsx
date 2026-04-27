'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MapPin, ChevronLeft } from 'lucide-react';
import { Day } from '@/types';

interface Props {
  day: Day;
  isOpen: boolean;
  onToggle: () => void;
}

export default function DayCard({ day, isOpen, onToggle }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      headerRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <motion.div
      layout
      className="cursor-pointer border-b border-stone-100"
      style={{ borderRight: isOpen ? `3px solid ${day.color}` : '3px solid transparent' }}
      onClick={onToggle}
    >
      {/* Header row */}
      <div ref={headerRef} className="flex items-center gap-3 px-5 py-4">
        <motion.div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-xl text-white shadow-md"
          style={{ background: day.color }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {day.emoji}
        </motion.div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
            יום {day.id}
          </p>
          <p className="mt-0.5 truncate text-[15px] font-bold text-stone-800">{day.title}</p>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-stone-300"
        >
          <ChevronLeft size={18} />
        </motion.div>
      </div>

      {/* Expanded body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4 px-5 pb-5 pt-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {day.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium"
                    style={{
                      color: day.color,
                      borderColor: `${day.color}40`,
                      background: `${day.color}0f`,
                    }}
                  >
                    <MapPin size={9} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Drive times */}
              {day.locations.some((l) => l.driveTime) && (
                <div className="space-y-1.5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                    זמן נסיעה משוער
                  </p>
                  {day.locations.filter((l) => l.driveTime).map((loc) => (
                    <div key={loc.id} className="flex items-center gap-2 text-[12px]">
                      <span className="text-base leading-none">🚗</span>
                      <span className="font-medium text-stone-700">{loc.nameHe}</span>
                      <span className="text-stone-300">—</span>
                      <span className="text-stone-500">{loc.driveTime}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Schedule */}
              <ul className="space-y-2">
                  {day.schedule.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2.5"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span
                        className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ background: day.color }}
                      />
                      <span className="text-[13px] leading-snug text-stone-600">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>

              {/* Links */}
              {day.locations.some((l) => l.links.length > 0) && (
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-400">
                    קישורים שימושיים
                  </p>
                  {day.locations.flatMap((loc) =>
                    loc.links.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border px-3 py-2 text-[12px] font-medium transition-colors hover:bg-stone-50"
                        style={{ color: day.color, borderColor: `${day.color}30` }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={12} />
                        {link.title}
                        <span className="mr-auto text-stone-400">{loc.nameHe}</span>
                      </a>
                    ))
                  )}
                </div>
              )}

              {/* Hotel */}
              {day.hotel && (
                <div className="flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5">
                  <span className="text-base leading-none">🏨</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                      מקום לינה
                    </p>
                    <a
                      href={day.hotel.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block truncate text-[12px] font-semibold text-stone-700 underline decoration-stone-300 underline-offset-2 hover:text-stone-900"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {day.hotel.nameHe}
                    </a>
                  </div>
                  <ExternalLink size={11} className="flex-shrink-0 text-stone-300" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
