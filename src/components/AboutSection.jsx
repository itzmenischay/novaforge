import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="studio"
      className="bg-white w-full pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-10 rounded-full border border-[#F26522] flex items-center justify-center text-[12px] font-semibold text-[#F26522]">
            1
          </div>
          <h3 className="text-[12px] font-semibold text-gray-600 uppercase tracking-widest">
            Introducing NovaForge
          </h3>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-gray-900 font-medium leading-[1.2] tracking-[-0.02em] text-[clamp(2rem,4vw,2.5rem)] sm:text-[clamp(2.5rem,4vw,2.5rem)] max-w-3xl mb-16"
        >
          Strategy-led creatives, delivering <br className="hidden md:block" />
          results in digital and beyond.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-8 h-[500px] rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRSsjCodjob9nunf6HATsXAugRTK_WTAFdakwufGNBYhSndCIfSxHshLNLGSkd4ZCZ3kE8vmfOlU3xP5aA0cOHe9ZtLxOMRFa9c703AvMSP8QpdXC9Z7Yq8vCnAZoMUPkK7vjZjUa1XP3AT7mMDdmfCZVZKxqY_9-Mh5QSS_2FwUEQJucPNxU3wMhDYojywI5FM43hRmT_ri_-hN0ESOxs11vt9jGSRR0n4iPp7Rf6d-g_fTbks9bWcFDf04XjGHNX-Il6dt62Jy2Q"
              alt="Studio Setup 1"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="md:col-span-4 h-[500px] rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiySzhQ2j7ExsUyjLtwcQoceqbwhScNbJZANi_CW3qB7v3nD5sHmQfkwTRY-aXpFelFadWcmWCrMCg_t6qle8gnV7YRuZ0knbIlOEg-sMOiKe9_jVUiC1tCCumutgoP5vh-Xyo-KdIuk-P0un5GcjsnkgtVZJ8L3TCxOhgYN2nCOotA9pI0BQCaf9W1DPTrPiaPw93kHbg-lwR-nvj_jumhhIG-btUne2Hx5fb3y8ro4zsN2BzKTF_6gyEFxtyo3CPat52AZNk_qqb"
              alt="Studio Setup 2"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Button */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
          }}
          className="
  group relative overflow-hidden
  liquid-glass-strong
  text-gray-900
  rounded-full
  pl-8 pr-3 py-3
  flex items-center gap-4
  border border-gray-300
  shadow-[0_2px_8px_rgba(0,0,0,0.04)]
  hover:border-gray-400
  hover:bg-gray-50
  hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]
  transition-all duration-500
  ease-[cubic-bezier(0.25,0.1,0.25,1)]
  hover:-translate-y-[2px]
"
        >
          {/* Text */}
          <div className="relative h-5 overflow-hidden flex flex-col justify-center text-[14px] font-medium leading-none">
            <span
              className="
        flex items-center h-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
            >
              About our studio
            </span>

            <span
              className="
        absolute left-0 top-full
        flex items-center h-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
            >
              About our studio
            </span>
          </div>

          {/* Icon */}
          <div
            className="
      w-8 h-8
      rounded-full
      bg-gray-900
      flex items-center justify-center
      text-white
      transition-all duration-500
      ease-[cubic-bezier(0.25,0.1,0.25,1)]
      group-hover:scale-110
    "
          >
            <ArrowRight
              size={16}
              className="
        transition-all duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-rotate-45
      "
            />
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default AboutSection;
