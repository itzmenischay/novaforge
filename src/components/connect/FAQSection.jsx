import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "How much do projects typically cost?",
    answer: "Our engagements typically start at $10,000 for standard web projects and $25,000 for comprehensive branding and product design. We scope every project individually based on your specific requirements and goals."
  },
  {
    question: "How long does a project take?",
    answer: "A typical website redesign takes 6-10 weeks, while full brand identity and product design projects can span 3-4 months. We provide a detailed timeline during our discovery phase."
  },
  {
    question: "Do you work internationally?",
    answer: "Yes, we collaborate with clients worldwide. Our team is accustomed to asynchronous communication and navigating different time zones to ensure seamless project delivery."
  },
  {
    question: "Can you work with internal teams?",
    answer: "Absolutely. We often integrate with in-house marketing or engineering teams, acting as an extension of your company to provide specialized strategic and creative execution."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we offer retainer partnerships for clients who need continuous design support, iteration, and strategic guidance after the initial launch."
  }
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <h4 className="text-[20px] md:text-[22px] font-medium text-gray-900 group-hover:text-[#F26522] transition-colors">
          {faq.question}
        </h4>
        <div className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#F26522] group-hover:bg-orange-50 transition-colors">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Plus size={16} className={`transition-colors ${isOpen ? 'text-[#F26522]' : 'text-gray-900 group-hover:text-[#F26522]'}`} />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full py-20 sm:py-28 lg:py-40">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
        
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
          className="flex flex-col items-start mb-16"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-10 rounded-full border border-[#F26522] flex items-center justify-center text-[12px] font-semibold text-[#F26522]">
              04
            </div>
            <h3 className="text-[12px] font-semibold text-gray-600 uppercase tracking-widest">
              Information
            </h3>
          </motion.div>
          
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-gray-900 font-medium leading-[1.2] tracking-[-0.02em] text-[clamp(2rem,4vw,2.5rem)] sm:text-[clamp(2.5rem,4vw,2.5rem)]"
          >
            Frequently asked questions
          </motion.h2>
        </motion.div>

        {/* Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="border-t border-gray-200"
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onToggle={() => handleToggle(index)} 
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;
