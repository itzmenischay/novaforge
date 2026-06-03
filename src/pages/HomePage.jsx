import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="w-full bg-transparent">
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
