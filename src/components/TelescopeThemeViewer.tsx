import { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const themes = [
  { name: 'One Dark', image: '/screenshots/themes/one%20dark.png', description: 'A dark, vivid, and colorful color scheme.' },
  { name: 'Nightfox', image: '/screenshots/themes/nightfox.png', description: 'A highly customizable theme for Neovim.' },
  { name: 'Everforest', image: '/screenshots/themes/everforest.png', description: 'A green-based nature-inspired color scheme.' },
  { name: 'Nord', image: '/screenshots/themes/nord.png', description: 'An arctic, north-bluish color palette.' },
  { name: 'Rose Pine', image: '/screenshots/themes/rosepine.png', description: 'Soho vibes for your code.' },
];

export function TelescopeThemeViewer() {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredThemes = themes.filter(theme => 
    theme.name.toLowerCase().includes(query.toLowerCase())
  );

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, filteredThemes.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        // Maybe do something on enter? For now just visual selection.
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredThemes]);

  const selectedTheme = filteredThemes[selectedIndex] || themes[0];

  return (
    <section className="py-32 px-6 flex justify-center items-center bg-[#050505]">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Aesthetic</span>
          </h2>
          <p className="text-secondary text-lg">
            Interactive theme picker. Just like in Neovim.
          </p>
        </div>

        {/* Telescope Window Container */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e222a] font-mono text-sm md:text-base">
          {/* Top Bar / Search */}
          <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#282c34]">
            <span className="text-blue-400 mr-2 font-bold">Telescope</span>
            <span className="text-secondary mr-2">colorscheme</span>
            <ChevronRight className="w-4 h-4 text-secondary mr-2" />
            <Search className="w-4 h-4 text-secondary mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to filter..."
              className="bg-transparent border-none outline-none text-white w-full placeholder-white/20"
              autoFocus
            />
          </div>

          <div className="flex flex-col md:flex-row h-[500px] md:h-[600px]">
            {/* Left: Results List */}
            <div className="w-full md:w-1/3 border-r border-white/10 overflow-y-auto bg-[#1e222a]">
              <div className="p-2">
                <div className="text-[10px] uppercase tracking-wider text-secondary/50 mb-2 px-3 font-bold">
                  Results ({filteredThemes.length}/{themes.length})
                </div>
                <ul>
                  {filteredThemes.map((theme, index) => (
                    <li
                      key={theme.name}
                      onClick={() => setSelectedIndex(index)}
                      className={`
                        px-4 py-3 cursor-pointer flex items-center justify-between
                        ${index === selectedIndex ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:bg-white/5'}
                      `}
                    >
                      <span className="flex items-center gap-2">
                        {index === selectedIndex && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                        {theme.name}
                      </span>
                      {index === selectedIndex && <span className="text-xs opacity-50">Selected</span>}
                    </li>
                  ))}
                  {filteredThemes.length === 0 && (
                    <li className="px-4 py-8 text-center text-gray-500 italic">
                      No themes found matching "{query}"
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Right: Preview Pane */}
            <div className="w-full md:w-2/3 bg-[#0a0a0a] relative flex flex-col">
              {/* Preview Header */}
              <div className="px-4 py-2 border-b border-white/10 bg-[#1e222a] flex justify-between items-center">
                <span className="text-white/80">Preview: <span className="text-white font-bold">{selectedTheme?.name}</span></span>
                <span className="text-xs text-white/40">{selectedTheme?.description}</span>
              </div>
              
              {/* Image Container */}
              <div className="flex-1 overflow-hidden relative p-4 md:p-8 flex items-center justify-center bg-grid-pattern">
                 {selectedTheme ? (
                   <div className="relative w-full h-full shadow-2xl rounded-lg overflow-hidden border border-white/10 group">
                      <img 
                        src={selectedTheme.image} 
                        alt={selectedTheme.name} 
                        className="w-full h-full object-contain md:object-cover"
                      />
                      {/* Overlay for realism */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                   </div>
                 ) : (
                    <div className="text-gray-600">Select a theme to preview</div>
                 )}
              </div>
              
              {/* Footer / Key Hints */}
              <div className="px-4 py-2 bg-[#1e222a] border-t border-white/10 text-xs text-gray-500 flex gap-4">
                 <span><span className="text-white bg-white/10 px-1 rounded">↑/↓</span> Navigate</span>
                 <span><span className="text-white bg-white/10 px-1 rounded">Enter</span> Select</span>
                 <span><span className="text-white bg-white/10 px-1 rounded">Esc</span> Close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
