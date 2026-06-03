import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JournalHero from '../components/JournalHero';
import CategoryFilter from '../components/CategoryFilter';
import ArticleCard from '../components/ArticleCard';
import NewsletterSection from '../components/NewsletterSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const MOCK_ARTICLES = [
  {
    id: 1,
    title: "The architecture of trust in UI",
    category: "Design",
    date: "May 12, 2026",
    readTime: "5 min read",
    excerpt: "Exploring how subtle spatial relationships and micro-interactions build subconscious trust with digital consumers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEj2_lq7S702qxL-kJFoQWRP0tFKgwE0VG-OBN4q0qdE7CzyHlFzD4jTKX2BGxgl_78wn25rofQpgJPFisgc37HLOAcqJTvw8t_sGs-paODP2fdbm2CdiHg9R7cXKslNm0RFQy_VHp_9578LD4ys5FGVwpT7XcdogYufQD6e7fBCPNIB54W6Wuvtw7Z_3zkxkZzz_EPCw89-DLuYyTkDq2estx1DTD7vXWBqEEPrIW0b1cCJu0TrHDfZ3Fg18i--34e7GOep_zs-Bd"
  },
  {
    id: 2,
    title: "Positioning for the post-SaaS era",
    category: "Strategy",
    date: "Apr 28, 2026",
    readTime: "12 min read",
    excerpt: "Why commoditization is forcing B2B brands to adopt consumer-grade emotional resonance in their messaging.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLpsxaN0CYaI98BAZWMTt-9OdoMZEFuFA6i5OAnGY-4Rr8qLjfUTrtsM9AYHQatbHMUwK92XjGBUxpvUfgBkksBB4HTyZepVmcSIkfJo176uFYBlbazLSiuFh4nBQ5i0rwxnYvnh2SYMnQ4lLNLFFTXCSyJ82BQo8jSNDAQgNxChnQ4ephlpOPxlkss5IpTAry0pNiBCdTNsSnvW04LXmI4Dg5NsbVmmyKs2WCfRm59xpJh2pha0NlBOXYATQK5bv3KLccgg93-NTZ"
  },
  {
    id: 3,
    title: "Generative systems in practice",
    category: "AI",
    date: "Apr 15, 2026",
    readTime: "7 min read",
    excerpt: "A look under the hood at how we are integrating LLMs into our daily creative workflows without losing the human touch.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsY6_ehUFV-xeBH0u_kPNdOKmvYfo5VahaN3bPF1QWmUQeCj0moF1m5AxVeaUyjirCcwwkWe1vo01i9lP0slX-uhVhjenSbAE91lWbGc8vEWXpcil7R8i-6fVLhLD86Ol8UA3uepimek7r_2dUaPeMOX19EUDkyRCZv8zaN1uvWOaGQdi1ittONDkff-kVTrKQvE0GdfAHK4Uky0vkhCXi286u6lWjU_cQ43zKowspwUcA5J4WCK9ri6BXhiRQRvGVpjjZSgMRa3AM"
  },
  {
    id: 4,
    title: "Designing liquid brand systems",
    category: "Branding",
    date: "Mar 30, 2026",
    readTime: "6 min read",
    excerpt: "How modern brands are discarding static design guidelines in favor of dynamic, adaptive visual languages.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Performance metrics that actually matter",
    category: "Development",
    date: "Mar 14, 2026",
    readTime: "9 min read",
    excerpt: "Moving beyond superficial lighthouse scores to measure real-world user interaction and load state responsiveness.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "The future of interactive canvas",
    category: "Design",
    date: "Feb 22, 2026",
    readTime: "8 min read",
    excerpt: "How WebGL, custom shaders, and GPU-driven rendering are transforming simple landing pages into immersive digital art.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "AI-driven personalization at scale",
    category: "AI",
    date: "Jan 18, 2026",
    readTime: "10 min read",
    excerpt: "Leveraging predictive algorithms to dynamically restructure user interfaces according to user behavior and preference.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Why engineering is a creative discipline",
    category: "Development",
    date: "Jan 05, 2026",
    readTime: "6 min read",
    excerpt: "Bridging the gap between creative concepts and technical execution by fostering collaborative engineering environments.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Building brand equity in Q1 2026",
    category: "Strategy",
    date: "Dec 20, 2025",
    readTime: "11 min read",
    excerpt: "A strategic breakdown of market positioning, digital touchpoints, and narrative storytelling in a saturated economy.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=800&q=80"
  }
];

const JournalPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredArticles = activeFilter === 'All' 
    ? MOCK_ARTICLES 
    : MOCK_ARTICLES.filter(article => article.category === activeFilter);

  return (
    <div className="w-full bg-[#F5F5F5] font-['Hanken_Grotesk',sans-serif]">
      {/* SECTION 1: JOURNAL HERO */}
      <JournalHero articleCount={MOCK_ARTICLES.length} />

      {/* SECTION 4: CATEGORY FILTER */}
      <CategoryFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* SECTION 3: LATEST ARTICLES */}
      <section className="bg-[#F5F5F5] py-24 px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 rounded-full border border-[#F26522] flex items-center justify-center text-[12px] font-semibold text-[#F26522]">
              01
            </div>
            <h3 className="text-[20px] font-medium text-gray-900 tracking-tight">
              Latest Writing
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.08
                  }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <div className="w-full text-center py-20 text-gray-500 font-medium text-lg">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: NEWSLETTER */}
      <NewsletterSection />

      {/* SECTION 6: JOURNAL CTA */}
      <CTASection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default JournalPage;
