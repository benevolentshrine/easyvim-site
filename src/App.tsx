import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shortcuts from './pages/Shortcuts';
import Philosophy from './pages/Philosophy';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-primary selection:bg-purple-500/30 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shortcuts" element={<Shortcuts />} />
          <Route path="/philosophy" element={<Philosophy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;