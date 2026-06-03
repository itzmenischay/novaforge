import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        exit={{ opacity: 0, y: -30, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
        className="w-full flex flex-col flex-1"
      >
        {children}
      </motion.main>

      {/* Exit Wipe: Expands upward to cover screen */}
      <motion.div
        className="fixed inset-0 bg-[#111111] z-[100] origin-bottom pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
      />
      
      {/* Enter Wipe: Collapses upward to reveal screen */}
      <motion.div
        className="fixed inset-0 bg-[#111111] z-[100] origin-top pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        exit={{ scaleY: 0 }}
      />
    </>
  );
};

export default PageTransition;
