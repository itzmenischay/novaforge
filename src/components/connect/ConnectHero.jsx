import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const ConnectHero = () => {
  return (
    <section className="min-h-[716px] bg-transparent pt-40 pb-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden flex items-center">
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.6 },
            },
          }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <span className="w-2 h-2 shrink-0 rounded-full bg-primary animate-pulse" />
              <span className="font-label-md text-label-md text-primary uppercase leading-none">
                Connect
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-8 tracking-tight"
          >
            Let's create something <br className="hidden md:block" />
            people won't forget.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="font-body-lg text-body-lg text-secondary max-w-2xl mb-12"
          >
            Whether you're launching a new brand, reimagining an existing
            experience, or building a digital product from scratch, we'd love to
            hear about it.
          </motion.p>

          {/* Statistics */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="flex flex-wrap gap-8 items-center mt-auto border-t border-outline-variant/30 pt-8"
          >
            <div>
              <div className="font-headline-md text-headline-md text-primary mb-1">
                24+
              </div>
              <div className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                Projects launched
              </div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary mb-1">
                97%
              </div>
              <div className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                Client satisfaction
              </div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md text-primary mb-1">
                3 wks
              </div>
              <div className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                Average kickoff
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Inquiry Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 lg:col-start-9 flex items-center justify-center mt-16 lg:mt-0"
        >
          <div className="liquid-glass w-full rounded-2xl p-8 flex flex-col gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)] relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl z-[-1]"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-tertiary/10 rounded-full blur-2xl z-[-1]"></div>

            <div className="flex items-start gap-4">
              <Calendar className="text-primary" size={24} strokeWidth={1.5} />
              <div>
                <div className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-1">
                  Availability
                </div>
                <div className="font-body-lg text-body-lg font-medium text-on-surface">
                  Currently booking: Q1 2026
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-outline-variant/20"></div>

            <div className="flex items-start gap-4">
              <Clock className="text-primary" size={24} strokeWidth={1.5} />
              <div>
                <div className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-1">
                  Response Time
                </div>
                <div className="font-body-lg text-body-lg font-medium text-on-surface">
                  Average response: Within 24 hours
                </div>
              </div>
            </div>

            <button
              type="button"
              className="
    w-full mt-4
    group relative overflow-hidden
    bg-primary text-on-primary
    rounded-full
    pl-6 pr-2 py-2
    flex items-center justify-center gap-3
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
                  Start Your Project
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
                  Start Your Project
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
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectHero;
