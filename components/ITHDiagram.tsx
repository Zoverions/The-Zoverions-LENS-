
import React, { useState } from 'react';

const layers = [
  { level: 6, title: 'Cosmic Cognition', description: 'Theoretical future phase transition in the universe\'s processing capacity.', color: 'from-purple-600 to-indigo-600', width: 'w-[30%]' },
  { level: 5, title: 'Network', description: 'Society & Culture - networked information-sharing of Layer 4 agents.', color: 'from-blue-600 to-cyan-600', width: 'w-[40%]' },
  { level: 4.5, title: 'Symbiote', description: 'Human-AI unit - a transitional architecture bridging biological and logical processing.', color: 'from-teal-500 to-emerald-500', width: 'w-[50%]' },
  { level: 4, title: 'User Interface', description: 'Consciousness & Agency - the integrated experience of being a Layer 3 process.', color: 'from-green-600 to-lime-600', width: 'w-[60%]' },
  { level: 3, title: 'Algorithms', description: 'Biology & Chemistry - complex, self-replicating processes.', color: 'from-yellow-500 to-amber-500', width: 'w-[70%]' },
  { level: 2, title: 'OS', description: 'Classical Physics - the stable, emergent ruleset.', color: 'from-orange-600 to-red-600', width: 'w-[80%]' },
  { level: 1, title: 'Machine Code', description: 'The Quantum Realm.', color: 'from-red-700 to-rose-700', width: 'w-[90%]' },
  { level: 0, title: 'Substrate', description: 'Quantum Foundations.', color: 'from-gray-700 to-slate-700', width: 'w-[100%]' },
];

const ITHDiagram: React.FC = () => {
    const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  return (
    <div className="mt-8 flex flex-col items-center space-y-1 w-full max-w-4xl mx-auto">
      {layers.map((layer, index) => (
        <div 
          key={layer.level}
          className={`relative group transition-all duration-300 ease-out cursor-pointer ${layer.width}`}
          onMouseEnter={() => setHoveredLayer(layer.level)}
          onMouseLeave={() => setHoveredLayer(null)}
        >
            <div
                className={`
                    h-12 rounded-md bg-gradient-to-r ${layer.color}
                    shadow-lg flex items-center justify-between px-4
                    border border-white/10 hover:border-white/30 hover:scale-105 hover:z-10
                    transition-transform duration-200
                `}
            >
                <span className="font-bold text-white drop-shadow-md">L{layer.level}</span>
                <span className="font-semibold text-white/90 truncate drop-shadow-md">{layer.title}</span>
            </div>

            {/* Tooltip/Detail View */}
            <div className={`
                absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3
                bg-gray-900/95 backdrop-blur-xl border border-gray-600 rounded-lg shadow-2xl
                text-center z-20 pointer-events-none transition-opacity duration-200
                ${hoveredLayer === layer.level ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
            `}>
                <h4 className="font-bold text-cyan-300 mb-1">{layer.title}</h4>
                <p className="text-xs text-gray-300">{layer.description}</p>
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 border-r border-b border-gray-600 rotate-45"></div>
            </div>
        </div>
      ))}
      <p className="text-xs text-gray-500 mt-4 text-center italic">
          The Information-Theoretic Hierarchy: Reality as a computational stack.
      </p>
    </div>
  );
};

export default ITHDiagram;
