
import React, { useState, useEffect } from 'react';

const ATHPCalibration: React.FC = () => {
    const [activeMode, setActiveMode] = useState<'alpha' | 'beta'>('alpha');
    const [isRunning, setIsRunning] = useState(false);
    const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('inhale');
    const [progress, setProgress] = useState(0);

    // Alpha (8-12Hz) Tuning: Slower, deeper rhythm (e.g., 4-7-8 breathing or box breathing)
    // Beta (13-30Hz) Tuning: Faster, focused rhythm (e.g., 2-2-2 breathing or just focus)

    // Using Box Breathing for Alpha (4s In, 4s Hold, 4s Out, 4s Pause)
    // Using Focus Pulse for Beta (2s In, 2s Out) - simplified for "High Alert"

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            const cycleDuration = activeMode === 'alpha' ? 16000 : 4000; // 16s vs 4s total cycle
            const step = 100; // update every 100ms

            interval = setInterval(() => {
                setProgress(prev => {
                    const next = prev + (step / cycleDuration) * 100;
                    if (next >= 100) return 0;
                    return next;
                });
            }, step);
        } else {
            setProgress(0);
        }
        return () => clearInterval(interval);
    }, [isRunning, activeMode]);

    // Calculate phase based on progress
    useEffect(() => {
        if (!isRunning) return;

        if (activeMode === 'alpha') {
            // Box Breathing: 0-25 (In), 25-50 (Hold), 50-75 (Out), 75-100 (Pause)
            if (progress < 25) setPhase('inhale');
            else if (progress < 50) setPhase('hold');
            else if (progress < 75) setPhase('exhale');
            else setPhase('pause');
        } else {
            // Focus Pulse: 0-50 (In), 50-100 (Out)
            if (progress < 50) setPhase('inhale');
            else setPhase('exhale');
        }
    }, [progress, activeMode, isRunning]);

    const getInstruction = () => {
        if (!isRunning) return "Ready";
        switch (phase) {
            case 'inhale': return "Inhale";
            case 'hold': return "Hold";
            case 'exhale': return "Exhale";
            case 'pause': return "Pause";
        }
    };

    const getColor = () => activeMode === 'alpha' ? 'text-teal-400' : 'text-amber-400';
    const getBgColor = () => activeMode === 'alpha' ? 'bg-teal-500' : 'bg-amber-500';

    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 shadow-lg mt-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-6">ATHP Calibration Tool</h3>

            <div className="flex space-x-4 mb-8">
                <button
                    onClick={() => { setActiveMode('alpha'); setIsRunning(false); }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${activeMode === 'alpha' ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/20' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                >
                    Alpha Tuning (Flow)
                </button>
                <button
                    onClick={() => { setActiveMode('beta'); setIsRunning(false); }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${activeMode === 'beta' ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/20' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                >
                    Beta Tuning (Focus)
                </button>
            </div>

            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Outer Ring */}
                <div className={`absolute inset-0 rounded-full border-4 ${activeMode === 'alpha' ? 'border-teal-900/30' : 'border-amber-900/30'}`}></div>

                {/* Expanding Circle */}
                <div
                    className={`rounded-full transition-all duration-100 ease-linear ${getBgColor()} shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                    style={{
                        width: phase === 'inhale' || (phase === 'hold' && activeMode === 'alpha') ? '100%' : '20%',
                        height: phase === 'inhale' || (phase === 'hold' && activeMode === 'alpha') ? '100%' : '20%',
                        opacity: isRunning ? 0.8 : 0.2
                    }}
                ></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                    <span className={`text-2xl font-bold uppercase tracking-widest drop-shadow-md ${getColor()}`}>
                        {getInstruction()}
                    </span>
                    {isRunning && (
                        <span className="text-xs text-white/70 mt-1 uppercase tracking-wider">
                            {activeMode} {activeMode === 'alpha' ? '8-12Hz' : '13-30Hz'}
                        </span>
                    )}
                </div>
            </div>

            <div className="mt-8 text-center max-w-md">
                <p className="text-sm text-gray-400 mb-6 min-h-[40px]">
                    {activeMode === 'alpha'
                        ? "Entrains the brain to the Alpha rhythm. Use for creative flow, pattern recognition, and 'zoning in'."
                        : "Entrains the brain to the Beta rhythm. Use for high-alert agency, critical analysis, and 'waking up'."}
                </p>

                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className={`w-full py-3 rounded-lg font-bold text-white transition-all transform hover:scale-[1.02] active:scale-95 ${activeMode === 'alpha' ? 'bg-gradient-to-r from-teal-600 to-emerald-600 shadow-teal-500/20' : 'bg-gradient-to-r from-amber-600 to-orange-600 shadow-amber-500/20'} shadow-lg`}
                >
                    {isRunning ? "Stop Protocol" : "Initiate Protocol"}
                </button>
            </div>
        </div>
    );
};

export default ATHPCalibration;
