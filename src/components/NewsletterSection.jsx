import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-white py-32 px-5 sm:px-8 lg:px-12 border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Animated envelope icon container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F26522]/10 text-[#F26522] mb-8"
        >
          <Mail size={32} />
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-gray-900 font-medium leading-[1.2] tracking-[-0.02em] text-[2.5rem] mb-4">
                Thoughtful insights, delivered rarely.
              </h2>
              <p className="text-gray-600 text-[18px] leading-[1.6] mb-10 max-w-xl mx-auto">
                Join 10,000+ designers and founders who receive our occasional missives on the craft of building modern digital experiences.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="flex-1 bg-gray-50 text-gray-900 font-['Hanken_Grotesk'] text-[16px] px-6 py-4 rounded-full border border-transparent focus:border-[#F26522] focus:bg-white transition-all outline-none placeholder:text-gray-400"
                />
                <button 
                  type="submit" 
                  className="bg-gray-900 text-white font-['Hanken_Grotesk'] text-[14px] font-semibold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-[12px] mt-6 opacity-75">No spam. Unsubscribe anytime.</p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center py-4"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <CheckCircle2 size={56} className="text-[#F26522] mb-6" />
              </motion.div>
              <h2 className="text-gray-900 font-medium leading-[1.2] tracking-[-0.02em] text-[2.5rem] mb-4">
                You're on the list!
              </h2>
              <p className="text-gray-600 text-[18px] leading-[1.6] max-w-md mx-auto">
                Thank you for subscribing. We look forward to sharing our latest ideas and insights with you.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 pb-0.5"
              >
                Go back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsletterSection;
