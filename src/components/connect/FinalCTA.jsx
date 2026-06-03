import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-[#111111] w-full py-24 sm:py-32 lg:py-48 flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#F26522]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium text-white leading-[1.05] tracking-[-0.03em] mb-8"
          >
            Ready to build <br className="hidden sm:block" />
            something remarkable?
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="text-gray-400 text-lg sm:text-[20px] leading-[1.6] max-w-[500px] mb-12 font-normal"
          >
            Let's discuss your vision, your goals, and where your brand is
            headed next.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.45,
              duration: 0.45,
            }}
            type="button"
            className="
    group relative overflow-hidden
    bg-primary text-on-primary
    rounded-full
    pl-8 pr-3 py-3
    flex items-center gap-4
    transition-all duration-500
    ease-[cubic-bezier(0.25,0.1,0.25,1)]
    shadow-[0_8px_24px_rgba(var(--primary-rgb),0.25)]
    hover:shadow-[0_12px_36px_rgba(var(--primary-rgb),0.35)]
    hover:-translate-y-[2px]
  "
          >
            <div className="relative h-5 overflow-hidden flex flex-col justify-center text-label-md font-label-md uppercase tracking-widest leading-none">
              <span
                className="
        flex items-center h-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
              >
                Let's Talk
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
                Let's Talk
              </span>
            </div>

            <div
              className="
      w-8 h-8
      rounded-full
      bg-white
      flex items-center justify-center
      text-primary
      transition-all duration-500
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
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
