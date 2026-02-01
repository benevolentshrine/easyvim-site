import { Cpu, Brain, Zap, Battery } from 'lucide-react';

const SpecCard = ({ label, value, icon: Icon }: { label: string, value: string, icon: any }) => (
    <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4">
        <div className="p-3 bg-purple-500/10 rounded-lg">
            <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <div>
            <div className="text-secondary text-sm uppercase tracking-wider mb-1">{label}</div>
            <div className="text-2xl font-bold text-white font-mono">{value}</div>
        </div>
    </div>
);

function Philosophy() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Philosophy</span></h1>
        <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
          EasyVim bridges the gap between the intuition of VS Code and the raw performance of the terminal.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-24">
         <SpecCard label="Idle RAM" value="~25 MB" icon={Brain} />
         <SpecCard label="Startup Time" value="< 50ms" icon={Zap} />
         <SpecCard label="Platform" value="Any" icon={Cpu} />
         <SpecCard label="Battery Impact" value="Minimal" icon={Battery} />
      </div>

      <div className="space-y-24">
          {/* Section 1 */}
          <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                 <span className="text-blue-400">01.</span> The Hardware Crisis
              </h2>
              <div className="prose prose-invert max-w-none text-lg text-secondary leading-relaxed">
                  <p>
                    Modern editors often consume gigabytes of RAM just to display text. We believe this is unacceptable. 
                    EasyVim restores the efficiency of the 90s with the UX of 2025.
                  </p>
                  <p className="mt-4">
                    It allows you to run a full development environment on any hardware—from an old ThinkPad to a Raspberry Pi Zero—without a single frame of stutter. 
                    Your editor should fly, not crawl.
                  </p>
              </div>
          </section>

          {/* Section 2 */}
          <section>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                 <span className="text-green-400">02.</span> The "Silent Teacher"
              </h2>
              <div className="prose prose-invert max-w-none text-lg text-secondary leading-relaxed">
                  <p>
                    Vim is infamous for "trapping" users in a steep learning curve. EasyVim removes this fear entirely.
                  </p>
                  <p className="mt-4">
                    We don't force you to learn modal editing immediately. Use the mouse, use the arrow keys, use <span className="text-white font-mono bg-white/10 px-1 rounded">Ctrl+C</span>. 
                    We built a safety net so you can be productive from minute one.
                  </p>
                  <p className="mt-4">
                    But when you are ready, the raw, unadulterated power of Vim is lurking just beneath the surface, waiting for you to discover it at your own pace.
                  </p>
              </div>
          </section>
      </div>
    </div>
  );
}

export default Philosophy;