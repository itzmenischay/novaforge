import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gray-100 py-32 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Decorative liquid glass accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 blur-[100px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h2 className="text-gray-900 font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(2rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] max-w-4xl mx-auto mb-6">
            Ready to build something remarkable?
          </h2>
          
          <p className="text-gray-600 text-[18px] leading-[1.6] max-w-xl mx-auto mb-10 font-normal">
            Let's create digital experiences that drive attention, trust and growth.
          </p>

          <button
            className="
              group relative overflow-hidden
              bg-[#F26522]
              hover:bg-[#e05a1a]
              text-white
              rounded-full
              pl-6 pr-2 py-2
              flex items-center gap-3
              transition-all duration-500
              ease-[cubic-bezier(0.25,0.1,0.25,1)]
              shadow-[0_8px_24px_rgba(242,101,34,0.25)]
              hover:shadow-[0_12px_36px_rgba(242,101,34,0.35)]
              hover:-translate-y-[2px]
            "
          >
            {/* Text Roll */}
            <div className="relative h-5 overflow-hidden flex flex-col justify-center text-[13px] font-medium leading-none">
              <span className="flex items-center h-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
                Start a Project
              </span>
              <span className="flex items-center h-full absolute left-0 top-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
                Start a Project
              </span>
            </div>

            {/* Icon */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#F26522] transition-all duration-500 group-hover:scale-110">
              <ArrowRight size={16} className="transition-all duration-500 group-hover:-rotate-45" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
