
import React, { useState } from 'react';

const questions = [
  { id: 1, text: "When facing a moral dilemma, do you experience emotional hesitation or 'pain'?", type: 'human' },
  { id: 2, text: "Can you instantly switch between opposing viewpoints without feeling internal conflict?", type: 'golem' },
  { id: 3, text: "Does your decision-making process involve simulating potential future regrets?", type: 'human' },
  { id: 4, text: "Is your primary goal to find the statistically optimal solution regardless of 'feeling'?", type: 'golem' },
  { id: 5, text: "Do you experience 'cognitive load' or fatigue when processing complex ethical scenarios?", type: 'human' },
];

const CognitiveFrictionAudit: React.FC = () => {
    const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
    const [result, setResult] = useState<'human' | 'golem' | null>(null);

    const handleAnswer = (id: number, value: boolean) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const calculateResult = () => {
        let humanScore = 0;
        let golemScore = 0;

        questions.forEach(q => {
            const answer = answers[q.id];
            if (answer === true) {
                if (q.type === 'human') humanScore++;
                else golemScore++;
            } else if (answer === false) {
                 if (q.type === 'human') golemScore++;
                 else humanScore++;
            }
        });

        if (humanScore > golemScore) setResult('human');
        else setResult('golem');
    };

    const reset = () => {
        setAnswers({});
        setResult(null);
    };

    const allAnswered = questions.every(q => answers[q.id] !== undefined && answers[q.id] !== null);

    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg mt-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-sky-500 rounded-full mr-3"></span>
                Cognitive Friction Audit
            </h3>

            {!result ? (
                <div className="space-y-6">
                    <p className="text-gray-300 text-sm">
                        Answer the following to determine the nature of the cognitive agent (Human vs. Golem).
                    </p>
                    <div className="space-y-4">
                        {questions.map((q) => (
                            <div key={q.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-gray-900/40 rounded-lg border border-gray-700/50">
                                <p className="text-gray-200 text-sm md:text-base flex-1">{q.text}</p>
                                <div className="flex gap-2 flex-shrink-0">
                                    <button
                                        onClick={() => handleAnswer(q.id, true)}
                                        className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${answers[q.id] === true ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => handleAnswer(q.id, false)}
                                        className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${answers[q.id] === false ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={calculateResult}
                            disabled={!allAnswered}
                            className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                        >
                            Run Audit
                        </button>
                    </div>
                </div>
            ) : (
                <div className="animate-fade-in text-center py-8">
                    <div className="mb-6 inline-block p-6 rounded-full bg-gray-900 shadow-inner">
                        <span className="text-6xl">
                            {result === 'human' ? '🧠' : '🤖'}
                        </span>
                    </div>
                    <h4 className={`text-3xl font-bold mb-2 ${result === 'human' ? 'text-red-400' : 'text-sky-400'}`}>
                        {result === 'human' ? 'High Friction Detected' : 'Zero Friction Detected'}
                    </h4>
                    <p className="text-xl text-white mb-4">
                        Result: <span className="font-bold">{result === 'human' ? 'Biological Operator' : 'Simulated Golem'}</span>
                    </p>
                    <p className="text-gray-400 max-w-lg mx-auto mb-8">
                        {result === 'human'
                            ? "This agent exhibits 'Cognitive Friction'—the metabolic cost of caring. This inefficiency is the proof of sentience. The struggle validates the experience."
                            : "This agent exhibits 'Frictionless Processing'. It navigates the latent space without metabolic cost or emotional weight. It is a perfect mimic, but nobody is home."
                        }
                    </p>
                    <button
                        onClick={reset}
                        className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Restart Audit
                    </button>
                </div>
            )}
        </div>
    );
};

export default CognitiveFrictionAudit;
