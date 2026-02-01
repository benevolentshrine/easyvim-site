import { useState, useEffect } from 'react';
import { Github, Code2, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleGetStarted = () => {
    if (location.pathname === '/') {
      document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#install');
    }
  };

  return (
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
        <div className="w-full px-8 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 z-50">
             <Link to="/" className="text-xl font-bold tracking-tighter text-white">EasyVim</Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
             {/* Links removed as per request */}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/benevolentshrine/easyvim" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105 hover:border-white/20"
            >
              <Github className="w-5 h-5 text-white transition-transform group-hover:rotate-12" />
              <span className="font-medium text-white">Star on GitHub</span>
            </a>
            <button onClick={handleGetStarted} className="hidden sm:flex px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-all items-center gap-2 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <Code2 className="w-4 h-4" />
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-50 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
                <Link to="/" className="text-2xl font-bold text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <a href="https://github.com/benevolentshrine/easyvim" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl font-bold text-white bg-white/10 px-6 py-3 rounded-full">
                  <Github className="w-6 h-6" />
                  GitHub Repo
                </a>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;