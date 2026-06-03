import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JournalHero = ({ articleCount = 24 }) => {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-between bg-transparent overflow-hidden border-b border-gray-100">
      <div className="flex-1" />

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* Left Column (60%) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-6 lg:pb-4"
          >
            {/* Meta / Stats */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-['Hanken_Grotesk'] text-[12px] font-bold uppercase tracking-[0.15em] text-[#F26522] border border-[#F26522]/20 px-3 py-1.5 rounded-full">
                The Journal
              </span>
              <div className="h-px w-8 bg-gray-300"></div>
              <div className="text-gray-500 text-[12px] font-medium uppercase tracking-wider">
                {articleCount} Articles Published
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-gray-900 font-medium leading-[1.02] tracking-[-0.04em] text-[clamp(2.5rem,6vw,5rem)] max-w-3xl">
              Thoughts from the <br className="hidden md:block" />
              intersection of design <br className="hidden md:block" />
              and technology.
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-lg sm:text-[19px] sm:leading-[1.6] max-w-[540px] mt-2 font-normal">
              An editorial perspective on brand building, digital experiences, creative strategy, and the future of product design.
            </p>
          </motion.div>

          {/* Right Column (40%) - Featured Article Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <Link to="#" className="group block relative overflow-hidden rounded-2xl bg-[#F5F5F5] border border-gray-100 hover:border-gray-200 transition-colors p-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Z7znhwBUKTDNCxvgDvrVbw2Mcqz7TooU0v1jeUhf_r22xHgllUKZhgT906t-H8WNiMB8VlsX1vhWkinOOaUPuQ5WWm0TZGvo1-i9tiqz9J0B0WPd6d2CyENkZZC8CQAvyZoSMua9aHB9wwEdcqfaWRfK1IbIgHnMjROugA_TUb3rh3ZWXp5-5jzYENVy-D4nirZn1IdeYRKq-_kzSXRWOSuw8m34hB6uRk6iuBI53hnBA1w-TzdAR_pQrOuKd6sSd9tu_x0R--YU" 
                  alt="Featured Article" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-900 shadow-sm">
                  Featured
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <div className="flex items-center gap-3 text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-3">
                  <span>Strategy</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> 8 Min Read</span>
                </div>
                
                <h3 className="text-[22px] leading-[1.2] font-medium text-gray-900 mb-3 group-hover:text-[#F26522] transition-colors">
                  Why modern brands are moving beyond traditional web design.
                </h3>
                
                <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2 mb-5">
                  An exploration of how immersive experiences, motion design and strategic storytelling are reshaping the digital landscape.
                </p>
                
                <div className="flex items-center text-[13px] font-semibold text-[#F26522] uppercase tracking-wider">
                  Read Article
                  <ChevronRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default JournalHero;
