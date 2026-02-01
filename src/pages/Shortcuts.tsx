import { Terminal, Keyboard, FileCode, Monitor } from 'lucide-react';

const ShortcutRow = ({ keys, action }: { keys: string, action: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-4 transition-colors">
    <div className="font-mono text-purple-300 bg-white/5 px-2 py-1 rounded border border-white/10 text-sm">
      {keys}
    </div>
    <div className="text-secondary text-sm font-medium">
      {action}
    </div>
  </div>
);

const SectionTitle = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-3 mb-6 text-white">
    <div className="p-2 bg-purple-500/20 rounded-lg">
      <Icon className="w-6 h-6 text-purple-400" />
    </div>
    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
  </div>
);

function Shortcuts() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tools</span></h1>
        <p className="text-xl text-secondary">We map the keys you already know to Neovim's powerful backend.</p>
      </div>

      <div className="grid gap-12">
        {/* Core Shortcuts */}
        <section className="bg-surface/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <SectionTitle icon={Keyboard} title="Core Shortcuts" />
          <div className="space-y-1">
             <ShortcutRow keys="Ctrl + S" action="Save File" />
             <ShortcutRow keys="Ctrl + O" action="Open Folder (Native Picker)" />
             <ShortcutRow keys="Ctrl + C" action="Copy / Stop Code" />
             <ShortcutRow keys="Ctrl + V" action="Paste" />
             <ShortcutRow keys="Ctrl + Z" action="Undo" />
             <ShortcutRow keys="Ctrl + F" action="Find File (Telescope)" />
             <ShortcutRow keys="Ctrl + H" action="Search Text in Project" />
             <ShortcutRow keys="Ctrl + B" action="Toggle Sidebar (Neo-tree)" />
             <ShortcutRow keys="Ctrl + \\" action="Toggle Terminal" />
             <ShortcutRow keys="F5" action="Run Code (Python, JS, C++, etc.)" />
          </div>
        </section>

        {/* The Manual */}
        <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-surface/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full">
                <SectionTitle icon={FileCode} title="Files & Sidebar" />
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  Press <span className="text-purple-300 font-mono">Ctrl+B</span> to open the file explorer (Neo-tree).
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-6 h-6 flex items-center justify-center bg-white/5 rounded text-white font-mono text-xs">a</span>
                    Add a file or folder
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-6 h-6 flex items-center justify-center bg-white/5 rounded text-white font-mono text-xs">d</span>
                    Delete selected
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-6 h-6 flex items-center justify-center bg-white/5 rounded text-white font-mono text-xs">r</span>
                    Rename file
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-6 h-6 flex items-center justify-center bg-white/5 rounded text-white font-mono text-xs">c</span>
                    Copy file
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-6 h-6 flex items-center justify-center bg-white/5 rounded text-white font-mono text-xs">m</span>
                    Move file
                  </li>
                </ul>
            </section>

            <section className="bg-surface/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full">
                <SectionTitle icon={Terminal} title="Running Code" />
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  EasyVim detects your language automatically. No configuration needed.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <p className="text-sm text-secondary">Open any Python, JS, C++, Rust, or Go file.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <p className="text-sm text-secondary">Press <span className="font-mono text-white">F5</span>.</p>
                  </div>
                   <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <p className="text-sm text-secondary">It runs inside the native inbuilt terminal.</p>
                  </div>
                </div>
            </section>
        </div>

        {/* Aesthetics */}
        <section className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
             <SectionTitle icon={Monitor} title="Aesthetics & Customization" />
             <div className="space-y-6">
                <div>
                   <h3 className="text-white font-bold mb-2">Theme Switcher</h3>
                   <p className="text-secondary text-sm">
                     Click "Theme" in the top bar to swap between Tokyo Night, Catppuccin, Kanagawa, and more. It remembers your choice!
                   </p>
                </div>
                <div>
                   <h3 className="text-white font-bold mb-2">Native GUI</h3>
                   <p className="text-secondary text-sm">
                     Press <span className="font-mono text-purple-300">Ctrl+O</span> to use your OS's native folder picker (Windows/Mac/Linux) instead of the command line.
                   </p>
                </div>
             </div>
        </section>
      </div>
    </div>
  );
}

export default Shortcuts;