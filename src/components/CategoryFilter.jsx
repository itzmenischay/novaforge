import { memo } from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = memo(({ categories = ['All', 'Branding', 'Design', 'Development', 'Strategy', 'AI'], activeFilter, onFilterChange }) => {
  return (
    <section className="bg-white py-8 px-5 sm:px-8 lg:px-12 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 -mb-2">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onFilterChange(category)}
                className="relative whitespace-nowrap px-6 py-2.5 rounded-full font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-wider uppercase transition-colors duration-300"
                style={{
                  color: isActive ? '#ffffff' : '#4B5563',
                  border: isActive ? '1px solid transparent' : '1px solid #E5E7EB'
                }}
              >
                {/* Framer Motion Shared Layout for Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Hide Scrollbar styling */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
});

CategoryFilter.displayName = 'CategoryFilter';

export default CategoryFilter;
