
import React from 'react';

const layers = [
  { level: 6, title: 'Cosmic Cognition', description: 'Theoretical future phase transition in the universe\'s processing capacity.', color: 'from-purple-500/20 to-indigo-500/20' },
  { level: 5, title: 'Network', description: 'Society & Culture - networked information-sharing of Layer 4 agents.', color: 'from-blue-500/20 to-cyan-500/20' },
  { level: 4.5, title: 'Symbiote', description: 'Human-AI unit - a transitional architecture bridging biological and logical processing.', color: 'from-teal-500/30 to-green-500/30' },
  { level: 4, title: 'User Interface', description: 'Consciousness & Agency - the integrated experience of being a Layer 3 process.', color: 'from-green-500/20 to-lime-500/20' },
  { level: 3, title: 'Algorithms', description: 'Biology & Chemistry - complex, self-replicating processes.', color: 'from-yellow-500/20 to-amber-500/20' },
  { level: 2, title: 'OS', description: 'Classical Physics - the stable, emergent ruleset.', color: 'from-orange-500/20 to-red-500/20' },
  { level: 1, title: 'Machine Code', description: 'The Quantum Realm.', color: 'from-red-500/20 to-rose-500/20' },
  { level: 0, title: 'Substrate', description: 'Quantum Foundations.', color: 'from-gray-500/20 to-slate-500/20' },
];

const ITHDiagram: React.FC = () => {
  return (
    <div className="mt-6 space-y-2">
      {layers.map((layer, index) => (
        <div 
          key={layer.level}
          className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/10 animate-slide-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center space-x-4">
            <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center font-bold text-2xl text-white shadow-md`}>
              {layer.level}
            </div>
            <div>
              <h4 className="font-semibold text-lg text-cyan-300">{layer.title}</h4>
              <p className="text-gray-400 text-sm">{layer.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ITHDiagram;
