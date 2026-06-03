import { motion } from 'framer-motion';

const CaseStudiesSection = () => {
  return (
    <section id="projects" className="bg-[#F5F5F5] w-full pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
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
            2
          </div>
          <h3 className="text-[12px] font-semibold text-gray-600 uppercase tracking-widest">
            Featured client work
          </h3>
        </motion.div>
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-gray-900 font-medium leading-[1.2] tracking-[-0.02em] text-[clamp(2rem,4vw,2.5rem)] sm:text-[clamp(2.5rem,4vw,2.5rem)] mb-16"
        >
          Our projects
        </motion.h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Case Study 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden relative mb-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNRKV975wGRmq0pyo3NmJHzK6Yr3F981tGQ8FX5iayJhuG7iClqkKOv4NRUC2YoQsGCZXLJnrK1C24i_fECAwj0SaLfz3ojEOhMrTuHOeTcgY_Fqg0W5JQAXdSPJKuijjY1qqXRqibaSn--R1cR6qnCz9zt4x73vfdwKyzG18ICcfJqDltEI4cEognQy449Pq-CMrLRESFYnq00y3x8QXNhuBunUfP40F6h63vudOV3yyt13gaSHclx3jQex49ilJ7Y8W4kUpo6Ek6"
                alt="Narrativ Case Study"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 liquid-glass text-gray-900 rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide">
                Web Design
              </div>
            </div>
            <h4 className="text-[32px] font-medium leading-[1.3] text-gray-900 mb-2 group-hover:text-[#F26522] transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              Narrativ
            </h4>
            <p className="text-[16px] text-gray-600">
              E-commerce platform re-platforming and digital identity.
            </p>
          </motion.div>
          
          {/* Case Study 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="group cursor-pointer md:mt-24"
          >
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden relative mb-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALYW4ozODQZEbZsbgiLnd8iil34D_G17xSFaG4pJy6cNmeLD5R-rRNxaHdxE7rXYju2BTAOPCZ156Ipzq1Ro-Uhih9wNiqgglQtpxI3esFTQc8LwZGGiYvPdUOVtbEGcmZKlRDwx_mG-Kh2OsuWWT0WP-9k6msElFEZe-9fiIqtUYBK-xCHmN90E_1Ttt_jVt1YZ6dRJKEvJwUzSPaM-knZXPbrKfGUOuEtzDXUaVq_kd5Y8zihoQMNFkWqHNcmcc3aAtomd8S2ckj"
                alt="Luminar Case Study"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 liquid-glass text-gray-900 rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide">
                App Design
              </div>
            </div>
            <h4 className="text-[32px] font-medium leading-[1.3] text-gray-900 mb-2 group-hover:text-[#F26522] transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              Luminar
            </h4>
            <p className="text-[16px] text-gray-600">
              Fintech ecosystem design and strategic positioning.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
