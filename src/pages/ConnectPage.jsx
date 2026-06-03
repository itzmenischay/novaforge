import Footer from '../components/Footer';
import ConnectHero from '../components/connect/ConnectHero';
import ProjectInquiryForm from '../components/connect/ProjectInquiryForm';
import OtherWaysToConnect from '../components/connect/OtherWaysToConnect';
import ProcessSection from '../components/connect/ProcessSection';
import ClientTestimonial from '../components/connect/ClientTestimonial';
import FAQSection from '../components/connect/FAQSection';
import FinalCTA from '../components/connect/FinalCTA';

const ConnectPage = () => {
  return (
    <div className="w-full bg-white font-['Hanken_Grotesk',sans-serif]">
      <ConnectHero />
      <ProjectInquiryForm />
      <OtherWaysToConnect />
      <ProcessSection />
      <ClientTestimonial />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default ConnectPage;
