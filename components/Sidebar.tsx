'use client';

import { motion } from 'framer-motion';
import DayCard from './DayCard';
import { Day } from '@/types';

interface Props {
  days: Day[];
  selectedDay: number | null;
  onSelectDay: (id: number) => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function Sidebar({ days, selectedDay, onSelectDay }: Props) {
  return (
    <aside className="flex flex-col border-r border-stone-200 bg-white shadow-[-6px_0_24px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <motion.div
        className="flex-shrink-0 border-b border-stone-100 bg-stone-50 px-5 py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-[12px] font-semibold text-stone-400 tracking-wide">
          לחץ על יום לפרטים המלאים
        </p>
      </motion.div>

      {/* Days list */}
      <motion.div
        className="flex-1 overflow-y-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {days.map((day) => (
          <motion.div key={day.id} variants={itemVariants}>
            <DayCard
              day={day}
              isOpen={selectedDay === day.id}
              onToggle={() => onSelectDay(selectedDay === day.id ? -1 : day.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </aside>
  );
}
