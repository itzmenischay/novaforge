import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const FeaturedArticle = () => {
  return (
    <section className="bg-white py-24 px-5 sm:px-8 lg:px-12 w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content (40%) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[12px] font-semibold tracking-wider text-[#F26522] bg-[#F26522]/10 px-3 py-1 rounded-full uppercase">
              Featured Story
            </span>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-500 font-medium">
              <Clock size={14} />
              <span>May 2026 • 8 min read</span>
            </div>
          </div>

          <h2 className="text-gray-900 font-medium leading-[1.15] tracking-[-0.02em] text-[2.5rem] lg:text-[48px] mb-6 hover:text-[#F26522] transition-colors duration-300 cursor-pointer">
            Why modern brands are moving beyond traditional web design.
          </h2>

          <p className="text-gray-600 text-[18px] leading-[1.6] mb-10 font-normal">
            An exploration of how immersive experiences, motion design and
            strategic storytelling are reshaping the digital landscape.
          </p>

          <button type="button" className="group relative overflow-hidden bg-gray-900 hover:bg-gray-800 text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-[2px] self-start">
            {/* Text Roll */}
            <div className="relative h-5 overflow-hidden flex flex-col justify-center text-[13px] font-medium leading-none">
              <span className="flex items-center h-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
                Read Article
              </span>
              <span className="flex items-center h-full absolute left-0 top-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
                Read Article
              </span>
            </div>

            {/* Icon */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 transition-all duration-500 group-hover:scale-110">
              <ArrowRight size={16} className="transition-all duration-500 group-hover:-rotate-45" />
            </div>
          </button>
        </motion.div>

        {/* Right Image (60%) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-7 order-1 lg:order-2"
        >
          <div className="aspect-[16/10] w-full rounded-3xl overflow-hidden group cursor-pointer border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <img 
              alt="Featured Article Visual" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Z7znhwBUKTDNCxvgDvrVbw2Mcqz7TooU0v1jeUhf_r22xHgllUKZhgT906t-H8WNiMB8VlsX1vhWkinOOaUPuQ5WWm0TZGvo1-i9tiqz9J0B0WPd6d2CyENkZZC8CQAvyZoSMua9aHB9wwEdcqfaWRfK1IbIgHnMjROugA_TUb3rh3ZWXp5-5jzYENVy-D4nirZn1IdeYRKq-_kzSXRWOSuw8m34hB6uRk6iuBI53hnBA1w-TzdAR_pQrOuKd6sSd9tu_x0R--YU"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
