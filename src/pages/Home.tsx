import { useState, useEffect } from 'react';
import { Terminal, Zap, FolderTree, ChevronRight, Check, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TelescopeThemeViewer } from '../components/TelescopeThemeViewer';

// --- Icons (Official via CDN) ---
const Icons = {
  Python: () => (
    <img src="https://cdn.simpleicons.org/python" alt="Python" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  TypeScript: () => (
    <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  Rust: () => (
    <img src="https://cdn.simpleicons.org/rust/white" alt="Rust" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  Cpp: () => (
    <img src="https://cdn.simpleicons.org/cplusplus/00599C" alt="C++" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  Go: () => (
    <img src="https://cdn.simpleicons.org/go/00ADD8" alt="Go" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  Lua: () => (
    <img src="https://cdn.simpleicons.org/lua/white" alt="Lua" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  Markdown: () => (
    <img src="https://cdn.simpleicons.org/markdown/white" alt="Markdown" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  Java: () => (
    <img src="https://cdn.simpleicons.org/java" alt="Java" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  C: () => (
    <img src="https://cdn.simpleicons.org/c/white" alt="C" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  ),
  JavaScript: () => (
    <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
  )
};

const TechStackIcon = ({ name, icon: Icon }: { name: string, icon: React.FC<any> }) => (
  <div className="flex flex-col items-center gap-3 p-4 hover:bg-white/5 transition-colors cursor-default group border border-transparent hover:border-white/10">
    <Icon />
    <span className="text-sm font-medium text-secondary group-hover:text-white transition-colors">{name}</span>
  </div>
);

// --- Main App Components ---

const FeatureRow = ({ icon, title, desc, image, reversed, isMVP }: { icon: React.ReactNode, title: string, desc: string, image: string, reversed?: boolean, isMVP?: boolean }) => (
  <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-24 ${reversed ? 'lg:flex-row-reverse' : ''} ${isMVP ? 'relative' : ''}`}>
    {isMVP && (
       <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl -z-10 rounded-full"></div>
    )}
    
    {/* Image Side */}
    <div className="w-full lg:w-3/5 relative group">
       <div className={`absolute -inset-4 bg-gradient-to-r ${reversed ? 'from-blue-500/20 to-purple-500/20' : 'from-purple-500/20 to-pink-500/20'} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
       <div className={`relative overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] ${isMVP ? 'border-purple-500/30 ring-1 ring-purple-500/20' : ''}`}>
          <img src={image} alt={title} className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
       </div>
    </div>

    {/* Text Side */}
    <div className="w-full lg:w-2/5 text-left">
       <div className={`inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 mb-8 text-white ${isMVP ? 'bg-purple-500/20 border-purple-500/50 text-purple-200' : ''}`}>
          {icon}
       </div>
       <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
         {title}
       </h3>
       <p className="text-xl text-secondary leading-relaxed">
         {desc}
       </p>
       {isMVP && (
         <Link to="/shortcuts" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all">
            View All Shortcuts
            <ChevronRight className="w-4 h-4" />
         </Link>
       )}
    </div>
  </div>
);

function Home() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Handle hash scroll on load/change
    if (window.location.hash === '#install') {
      setTimeout(() => {
        document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const copyInstall = () => {
    navigator.clipboard.writeText('git clone https://github.com/benevolentshrine/easyvim.git && cd easyvim && ./install.sh');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen selection:bg-white/20 bg-background relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 blur-[150px] rounded-full"></div>

        {/* Floating Lines/Shapes */}
        <div className="absolute top-20 left-[10%] w-[1px] h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-40 right-[15%] w-[1px] h-60 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-40 left-[20%] w-[1px] h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-32 px-6 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border text-[10px] uppercase tracking-widest text-secondary">
            <span className="w-1.5 h-1.5 bg-green-500 animate-pulse"></span>
            v1.0 Available Now
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white leading-tight">
            Neovim config that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-black italic pr-2">simply</span> 
            <span className="font-fancy text-5xl md:text-7xl block md:inline text-purple-400 ml-2">WORKS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-16 leading-relaxed">
            The minimal, lightning-fast Neovim configuration that respects your RAM and your muscle memory.
          </p>

          {/* Professional Transitioned Main Screenshot */}
          <div className="w-full max-w-7xl mx-auto relative animate-slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
             <div className="relative overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 pointer-events-none"></div>
                <img 
                  src="/screenshots/Main.png" 
                  alt="EasyVim Main Interface" 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700" 
                />
                
                {/* Subtle Overlay Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
             </div>
          </div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 blur-[120px] -z-10 pointer-events-none"></div>
      </section>

      {/* Languages Supported */}
      <section className="py-20 border-y border-border/50 bg-[#0a0a0a]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-secondary mb-12 uppercase tracking-widest">Languages Supported</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <TechStackIcon name="Python" icon={Icons.Python} />
            <TechStackIcon name="TypeScript" icon={Icons.TypeScript} />
            <TechStackIcon name="JavaScript" icon={Icons.JavaScript} />
            <TechStackIcon name="Rust" icon={Icons.Rust} />
            <TechStackIcon name="C" icon={Icons.C} />
            <TechStackIcon name="C++" icon={Icons.Cpp} />
            <TechStackIcon name="Java" icon={Icons.Java} />
            <TechStackIcon name="Go" icon={Icons.Go} />
            <TechStackIcon name="Lua" icon={Icons.Lua} />
            <TechStackIcon name="Markdown" icon={Icons.Markdown} />
          </div>
        </div>
      </section>

      {/* Installation CLI (Moved Up) */}
      <section id="install" className="py-32 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">Install in Seconds</h2>
          <div className="bg-surface border border-border p-8 shadow-2xl text-left relative group">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <pre className="font-mono text-sm md:text-lg text-gray-300 overflow-x-auto leading-relaxed">
              <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> git clone https://github.com/benevolentshrine/easyvim.git<br/>
              <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> cd easyvim<br/>
              <span className="text-green-400">➜</span> <span className="text-blue-400">~/easyvim</span> ./install.sh
            </pre>
            <button 
              onClick={copyInstall}
              className="absolute top-8 right-8 p-3 text-secondary hover:text-white transition-colors bg-white/5 border border-white/10 hover:bg-white/10"
            >
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </section>

      {/* Feature Section (Zig-Zag) */}
      <section className="py-32 px-6 w-full max-w-[1920px] mx-auto">
        <div className="mb-32 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight text-white">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Flow</span>.
          </h2>
          <p className="text-2xl text-secondary max-w-2xl mx-auto font-light">
            Everything you need to stay in the zone.
          </p>
        </div>

        <div className="space-y-32">
          <FeatureRow 
            icon={<FolderTree className="w-8 h-8" />}
            title="Visual Project Navigation"
            desc="Stop memorizing file paths. Neo-Tree gives you a powerful, git-aware file explorer that toggles instantly. Perform file operations, filter nodes, and see git status at a glance without ever leaving your keyboard."
            image="/screenshots/features/neotree%201.png"
            reversed={false}
          />
          <FeatureRow 
            icon={<Terminal className="w-8 h-8" />}
            title="Zero-Latency Terminal"
            desc="Your terminal is now a first-class citizen. Toggle a lightning-fast inbuilt terminal with a single keystroke. Run tests, git commands, or system scripts directly inside your editor, then dismiss it to get back to coding instantly."
            image="/screenshots/features/terminal.png"
            reversed={true}
          />
           <FeatureRow 
            icon={<Zap className="w-8 h-8" />}
            title="Muscle Memory Mastery"
            desc="We've mapped the most common actions to mnemonic keybindings that make sense. From window management to LSP actions, every shortcut is designed to minimize finger travel and maximize speed."
            image="/screenshots/features/shortcuts.png"
            reversed={false}
            isMVP={true}
          />
        </div>
      </section>

      {/* Themes Gallery Section - Telescope Style */}
      <TelescopeThemeViewer />

      <footer className="py-12 border-t border-border/50 text-center text-secondary text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Terminal className="w-4 h-4" />
          <span className="font-bold text-white">EasyVim</span>
        </div>
        <p>&copy; 2026. Open Source & Free.</p>
      </footer>
    </div>
  );
}

export default Home;