import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white w-full py-16 px-5 sm:px-8 lg:px-16 mx-auto flex flex-col md:flex-row justify-between border-t border-gray-200 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-8 md:mb-0"
      >
        NovaForge
      </motion.div>
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-wrap gap-6"
        >
        <span 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[14px] text-gray-600"
        >
          © 2026 NovaForge Agency. All rights reserved.
        </span>
        
          <a href="#" className="text-[14px] text-gray-600 hover:text-[#F26522] transition-colors">Privacy Policy</a>
          <a href="#" className="text-[14px] text-gray-600 hover:text-[#F26522] transition-colors">Terms of Service</a>
          <a href="#" className="text-[14px] text-gray-600 hover:text-[#F26522] transition-colors">LinkedIn</a>
          <a href="#" className="text-[14px] text-gray-600 hover:text-[#F26522] transition-colors">Instagram</a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
