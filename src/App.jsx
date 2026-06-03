import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import { AnimatePresence, MotionConfig } from 'framer-motion';

import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';
import ConnectPage from './pages/ConnectPage';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import ShaderBackground from './components/ShaderBackground';

// Scroll to hash / top component integrated with Lenis
function ScrollToHashAndTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Delay scroll until the exit animation wipe is covering the screen
    const timeout = setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { offset: -20, duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }
    }, 450); // Matches the 0.45s exit duration

    return () => clearTimeout(timeout);
  }, [pathname, hash, lenis]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Global Shader Background (only visible on Home) */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-all duration-700 z-0 bg-[#EFEFEF] ${
          isHome ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ShaderBackground />
      </div>

      {/* Global Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      {/* Animated Routes */}
      <MotionConfig reducedMotion="user">
        <div className="relative z-10 w-full min-h-screen flex flex-col">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
              <Route path="/journal" element={<PageTransition><JournalPage /></PageTransition>} />
              <Route path="/connect" element={<PageTransition><ConnectPage /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </div>
      </MotionConfig>
    </>
  );
}

function App() {
  return (
    <Router>
      <ReactLenis root>
        <ScrollToHashAndTop />
        <AnimatedRoutes />
      </ReactLenis>
    </Router>
  );
}

export default App;
