
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WhyRocketNow } from './components/WhyRocketNow';
import { Steps } from './components/Steps';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { VideoSection } from './components/VideoSection';
import { FloatingLineBanner } from './components/FloatingLineBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Features />
        <WhyRocketNow />
        <Steps />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <FloatingLineBanner />
    </div>
  );
}

export default App;
