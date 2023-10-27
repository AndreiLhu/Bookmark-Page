import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import Features from './pages/Features/Features';

import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import Questions from './pages/Questions/Questions';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Pricing />
      <Questions />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
