import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import FloatingLanguageSwitcher from './components/FloatingLanguageSwitcher';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ContactPage from './pages/Contact';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        {/* Floating Language Switcher */}
        <FloatingLanguageSwitcher />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;