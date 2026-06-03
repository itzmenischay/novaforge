import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your goals, audience and challenges."
    },
    {
      number: "02",
      title: "Strategy",
      description: "We define the roadmap, direction and opportunities."
    },
    {
      number: "03",
      title: "Execution",
      description: "Design and development come together."
    },
    {
      number: "04",
      title: "Launch",
      description: "Your project goes live and continues evolving."
    }
  ];

  return (
    <section className="bg-white w-full py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex flex-col items-start mb-16 lg:mb-24"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-10 rounded-full border border-[#F26522] flex items-center justify-center text-[12px] font-semibold text-[#F26522]">
              03
            </div>
            <h3 className="text-[12px] font-semibold text-gray-600 uppercase tracking-widest">
              Process
            </h3>
          </motion.div>
          
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-gray-900 font-medium leading-[1.2] tracking-[-0.02em] text-[clamp(2rem,4vw,2.5rem)] sm:text-[clamp(2.5rem,4vw,2.5rem)]"
          >
            What happens next?
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-gray-200 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
              className="flex flex-col relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-900 font-semibold text-[15px] tracking-wide mb-6">
                {step.number}
              </div>
              <h4 className="text-[22px] font-medium text-gray-900 mb-3">
                {step.title}
              </h4>
              <p className="text-[16px] text-gray-500 font-normal leading-relaxed pr-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;
