import { motion } from 'framer-motion';

const ClientTestimonial = () => {
  return (
    <section className="bg-[#F5F5F5] w-full py-24 sm:py-32 lg:py-40 flex items-center justify-center border-y border-gray-200">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[#F26522] text-6xl font-serif mb-6 leading-none">"</div>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-medium text-gray-900 leading-[1.2] tracking-[-0.02em] mb-12">
            NovaForge transformed our digital presence into a competitive advantage. The process was clear, collaborative and remarkably effective.
          </h2>
          
          <div className="flex flex-col items-center gap-1">
            <span className="text-[16px] font-semibold text-gray-900">Sarah Jenkins</span>
            <span className="text-[14px] text-gray-500 font-medium">Chief Marketing Officer</span>
            <span className="text-[13px] text-gray-400 uppercase tracking-widest mt-1">Acme Corp</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
