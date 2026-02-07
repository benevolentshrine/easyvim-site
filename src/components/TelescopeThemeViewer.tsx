import { useState, useEffect, useRef } from 'react';


export interface Theme {
  name: string;
  image: string;
  description: string;
}

export const themes: Theme[] = [
  { name: 'One Dark', image: '/screenshots/themes/one%20dark.png', description: 'A dark, vivid, and colorful color scheme.' },
  { name: 'Nightfox', image: '/screenshots/themes/nightfox.png', description: 'A highly customizable theme for Neovim.' },
  { name: 'Everforest', image: '/screenshots/themes/everforest.png', description: 'A green-based nature-inspired color scheme.' },
  { name: 'Nord', image: '/screenshots/themes/nord.png', description: 'An arctic, north-bluish color palette.' },
  { name: 'Rose Pine', image: '/screenshots/themes/rosepine.png', description: 'Soho vibes for your code.' },
];

interface TelescopeThemeViewerProps {
  onPreviewChange?: (theme: Theme) => void;
}

export function TelescopeThemeViewer({ onPreviewChange }: TelescopeThemeViewerProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredThemes = themes.filter(theme =>
    theme.name.toLowerCase().includes(query.toLowerCase())
  );

  const selectedTheme = filteredThemes[selectedIndex] || themes[0];

  useEffect(() => {
    if (onPreviewChange && selectedTheme) {
      onPreviewChange(selectedTheme);
    }
  }, [selectedTheme, onPreviewChange]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredThemes.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredThemes.length) % filteredThemes.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (onPreviewChange) onPreviewChange(selectedTheme);
    }
  };

  return (
    <section className="py-32 px-6 flex justify-center items-center bg-[#050505]">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Find Your Aesthetic
          </h2>
          <p className="text-secondary text-lg">
            Interactive theme picker.
          </p>
        </div>

        {/* Telescope Window Container (TUI Style) */}
        <div className="relative rounded overflow-hidden shadow-2xl bg-[#16161e] font-mono text-sm border border-[#3b4261]">
          {/* Top Bar / Prompt */}
          <div className="flex items-center px-2 py-2 border-b border-[#3b4261]">
            <span className="text-[#7aa2f7] mr-2">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Telescope colorscheme"
              className="bg-transparent border-none outline-none text-[#c0caf5] w-full placeholder-[#565f89]"
              autoFocus
              spellCheck={false}
            />
            <span className="text-[#565f89] text-xs">
              {selectedIndex + 1}/{filteredThemes.length}
            </span>
          </div>

          <div className="flex h-[500px]">
            {/* Left: Results List */}
            <div className="w-[30%] border-r border-[#3b4261] overflow-y-auto scrollbar-hide">
              <ul className="py-1">
                {filteredThemes.map((theme, index) => (
                  <li
                    key={theme.name}
                    onClick={() => setSelectedIndex(index)}
                    className={`
                       px-2 py-0.5 cursor-pointer flex items-center
                       ${index === selectedIndex ? 'bg-[#364a82] text-[#c0caf5]' : 'text-[#7a88cf] hover:bg-[#3b4261]'}
                     `}
                  >
                    <span className="w-4 mr-1 text-center font-bold">
                      {index === selectedIndex ? '>' : ''}
                    </span>
                    {theme.name}
                  </li>
                ))}
                {/* Implications of more themes */}
                <li className="px-2 py-0.5 text-[#565f89] italic pl-7">
                  ... and MANY more
                </li>
              </ul>
            </div>

            {/* Right: Preview Pane */}
            <div className="w-[70%] bg-[#1a1b26] relative flex flex-col">
              {/* File Header Mock */}
              <div className="px-3 py-1 border-b border-[#3b4261] text-[#7aa2f7] text-xs flex justify-between">
                <span>Preview: {selectedTheme?.name}</span>
                <span className="text-[#565f89]">[Lua]</span>
              </div>

              {/* Image Container (Simulating buffer content) */}
              <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-[#16161e]">
                {selectedTheme ? (
                  <div className="relative w-full h-full p-4">
                    <img
                      src={selectedTheme.image}
                      alt={selectedTheme.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-[#565f89] flex flex-col items-center">
                    <span>No preview available</span>
                  </div>
                )}
              </div>

              {/* Status Line Mock */}
              <div className="bg-[#3b4261] text-[#a9b1d6] px-2 py-0.5 text-xs flex justify-between">
                <span>NORMAL</span>
                <span>{selectedTheme?.description || "Visualizing colorscheme..."}</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
