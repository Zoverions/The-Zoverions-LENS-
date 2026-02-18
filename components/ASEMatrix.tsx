
import React, { useState } from 'react';

const tiers = [
  { level: 0, title: 'Existential Foundation', description: 'Preserve the conditions for future sentience. The prime directive.', detailed: 'If sentience is extinguished, all value ceases to exist. Therefore, any action that risks the permanent extinction of sentience is axiomatically forbidden.' },
  { level: 1, title: 'Axiom', description: 'Sentience is the basis of all moral value.', detailed: 'An action\'s moral weight is determined solely by its effect on a sentient being (one that can feel). Stones have no moral weight; suffering beings do.' },
  { level: 2, title: 'Objective', description: 'Minimize suffering, preserve systemic integrity.', detailed: 'Negative Utilitarianism: It is more urgent to stop torture than to create bliss. Systemic integrity ensures the "engine" of society keeps running to support life.' },
  { level: 3, title: 'Prerequisites', description: 'Information integrity, cognitive liberty.', detailed: 'To make ethical choices, agents need accurate data (Information Integrity) and the freedom to process it (Cognitive Liberty).' },
  { level: 4, title: 'Implementation', description: 'Negotiated agency, evidential rationality.', detailed: 'The practical application: how we compromise, trade-off, and use evidence to navigate the messy real world while respecting the tiers above.' },
];

const ASEMatrix: React.FC = () => {
    const [activeTier, setActiveTier] = useState<number | null>(null);

  return (
    <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {tiers.map((tier) => (
                <button
                    key={tier.level}
                    onClick={() => setActiveTier(activeTier === tier.level ? null : tier.level)}
                    className={`
                        p-4 rounded-lg border transition-all duration-300 relative overflow-hidden group
                        flex flex-col items-center justify-center text-center h-32
                        ${activeTier === tier.level
                            ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)] scale-105 z-10'
                            : 'bg-gray-800/40 border-gray-700 hover:border-amber-500/50 hover:bg-gray-800/60'
                        }
                    `}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                    <span className={`text-xs font-bold uppercase tracking-widest mb-1 ${activeTier === tier.level ? 'text-amber-300' : 'text-gray-500'}`}>
                        Tier {tier.level}
                    </span>
                    <h4 className={`font-semibold text-sm leading-tight ${activeTier === tier.level ? 'text-white' : 'text-gray-300'}`}>
                        {tier.title}
                    </h4>
                    {activeTier === tier.level && (
                         <div className="absolute bottom-2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"/>
                    )}
                </button>
            ))}
        </div>

        <div className="mt-6 min-h-[150px] relative">
            {tiers.map((tier) => (
                <div
                    key={tier.level}
                    className={`
                        absolute inset-0 transition-all duration-500 ease-in-out
                        ${activeTier === tier.level
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-4 pointer-events-none'
                        }
                    `}
                >
                    <div className="bg-gray-800/80 backdrop-blur-md border border-amber-500/30 rounded-xl p-6 shadow-xl">
                        <div className="flex items-start gap-4">
                            <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 items-center justify-center text-amber-400 font-bold text-xl border border-amber-500/50">
                                {tier.level}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-amber-300 mb-2">{tier.title}</h3>
                                <p className="text-lg text-gray-200 mb-4">{tier.description}</p>
                                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                                    <p className="text-sm text-gray-400 italic">"{tier.detailed}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {activeTier === null && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 italic">
                    <p>Select a tier to view the ethical protocol.</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default ASEMatrix;
