
import React from 'react';

const tiers = [
  { level: 0, title: 'Existential Foundation', description: 'Preserve the conditions for future sentience. The prime directive.' },
  { level: 1, title: 'Axiom', description: 'Sentience is the basis of all moral value. An action\'s moral weight is determined by its effect on a sentient being.' },
  { level: 2, title: 'Objective', description: 'Minimize suffering, preserve systemic integrity. Weights the reduction of harm as more urgent than the promotion of pleasure.' },
  { level: 3, title: 'Prerequisites', description: 'Information integrity, cognitive liberty. Sentient beings need access to reality and the ability to think.' },
  { level: 4, title: 'Implementation', description: 'Negotiated agency, evidential rationality. The "how-to" of applying the tiers in a complex world.' },
];

const ASEMatrix: React.FC = () => {
  return (
    <div className="mt-6 space-y-4">
      {tiers.map((tier, index) => (
        <div 
          key={tier.level}
          className="border-l-4 border-amber-400 pl-4 py-2 bg-gray-800/40 rounded-r-lg animate-slide-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <h4 className="font-semibold text-amber-300">Tier {tier.level}: {tier.title}</h4>
          <p className="text-gray-400 text-sm mt-1">{tier.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ASEMatrix;
