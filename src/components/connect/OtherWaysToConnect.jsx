import { motion } from 'framer-motion';
import { Mail, Calendar, Users } from 'lucide-react';

const OtherWaysToConnect = () => {
  const cards = [
    {
      title: "Email",
      description: "hello@novaforge.studio",
      subtext: "Response: Within 24 hours",
      icon: <Mail size={24} className="text-[#F26522]" />
    },
    {
      title: "Schedule a Call",
      description: "Book a discovery session",
      subtext: "45 Minutes",
      icon: <Calendar size={24} className="text-[#F26522]" />
    },
    {
      title: "Partnerships",
      description: "For collaborations, speaking opportunities and strategic partnerships",
      subtext: "Connect with leadership",
      icon: <Users size={24} className="text-[#F26522]" />
    }
  ];

  return (
    <section className="bg-white w-full py-16 sm:py-20 lg:py-28 overflow-hidden">
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
          className="flex flex-col items-start mb-16"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-10 rounded-full border border-[#F26522] flex items-center justify-center text-[12px] font-semibold text-[#F26522]">
              02
            </div>
            <h3 className="text-[12px] font-semibold text-gray-600 uppercase tracking-widest">
              Direct Contact
            </h3>
          </motion.div>
          
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            className="text-gray-900 font-medium leading-[1.2] tracking-[-0.02em] text-[clamp(2rem,4vw,2.5rem)] sm:text-[clamp(2.5rem,4vw,2.5rem)]"
          >
            Prefer another way <br className="hidden sm:block" />
            to reach us?
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
              className="h-full"
            >
              <a 
                href="#"
                className="group flex flex-col justify-between h-full bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] min-h-[240px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h4 className="text-[20px] font-medium text-gray-900 mb-2 group-hover:text-[#F26522] transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-[16px] text-gray-600 font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                <div className="pt-8 mt-auto">
                  <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
                    {card.subtext}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OtherWaysToConnect;
