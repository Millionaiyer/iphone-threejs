import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Model from './components/Model';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
