'use client';

import { motion } from 'framer-motion';

function ItalianFlag({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex overflow-hidden rounded-[3px] flex-shrink-0 ${className}`}
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.2)' }}
    >
      <div className="flex-1 bg-[#009246]" />
      <div className="flex-1 bg-[#f0f0f0]" />
      <div className="flex-1 bg-[#ce2b37]" />
    </div>
  );
}

export default function Header() {
  return (
    <header
      className="relative flex-shrink-0 overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #006830 0%, #1a8a4a 25%, #e8e8e8 50%, #c8102e 75%, #9b0a22 100%)',
      }}
    >
      {/* Dark overlay so text stays legible over the bright gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.38)' }}
      />

      {/* Subtle vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 120% at 50% 50%, transparent 40%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-4 sm:px-8 sm:py-5 lg:py-6">

        {/* Brand */}
        <motion.div
          className="flex min-w-0 items-center gap-3 sm:gap-5"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <ItalianFlag className="h-10 w-7 sm:h-14 sm:w-9 lg:h-16 lg:w-11" />

          <div className="min-w-0">
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 sm:block">
              Italy Travel Planner
            </p>
            <h1 className="truncate text-xl font-black leading-tight tracking-tight drop-shadow-md sm:text-3xl lg:text-4xl">
              מסע לאיטליה
            </h1>
            <p className="mt-0.5 hidden items-center gap-2 text-[11px] font-light tracking-widest text-white/70 sm:flex">
              <span>אגם גארדה</span>

            </p>
            <p className="mt-0.5 text-[11px] text-white/60 sm:hidden">
            אגם גארדה
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom edge ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
    </header>
  );
}
