
import React from 'react';
import type { ContentData } from './types';
import ITHDiagram from './components/ITHDiagram';
import ASEMatrix from './components/ASEMatrix';
import CognitiveFrictionAudit from './components/CognitiveFrictionAudit';
import ATHPCalibration from './components/ATHPCalibration';

export const ZoverionsContent: ContentData = [
  {
    id: 'part1',
    title: 'The Foundation',
    description: 'The "What" / The LENS\'s Optics',
    subsections: [
      {
        id: '1.1',
        title: "The LENS's Map: The Information-Theoretic Hierarchy (ITH)",
        content: (
          <div className="prose prose-invert prose-sm md:prose-base max-w-none">
            <p>The framework's model of reality is a 7-layer computational stack. This map is the LENS's "operating system," allowing us to analyze any phenomenon, from physics to culture, by identifying the layer on which it operates and its dependencies.</p>
            <ITHDiagram />
            <p className="mt-4">For example, a "cultural meme" (Layer 5) is an informational algorithm (Layer 3) that runs on the substrate of biological brains (Layer 3) to create a shared conscious experience (Layer 4) that dictates new social rules (Layer 5). This map prevents us from confusing the algorithm (the idea) with the substrate (the brain).</p>
          </div>
        )
      },
      {
        id: '1.2',
        title: "The LENS's Compass: Adaptive Sentience-Centered Ethics (ASE 2.0)",
        content: (
          <div className="prose prose-invert prose-sm md:prose-base max-w-none">
            <p>All analysis is filtered through a rigorous ethical compass. ASE 2.0 takes the subjective experience of sentience as its core axiom because all value—all joy, suffering, and meaning—is contingent upon it. It uses a tiered matrix to resolve dilemmas, prioritizing harm reduction.</p>
            <ASEMatrix />
          </div>
        )
      },
      {
        id: '1.3',
        title: 'The "Experience Golem" Ontology',
        content: (
            <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                <p>A core function of this toolkit is to rigorously map biological cognition against AI mimicry without anthropomorphizing. We do this by rejecting simplistic behavioral comparisons and using a functional map that differentiates three components:</p>
                <ul className="list-disc pl-5">
                    <li><strong>Substrate:</strong> The physical "hardware" (e.g., wetware vs. silicon).</li>
                    <li><strong>Process:</strong> The computational function (e.g., "goal-seeking," "pattern-matching," or "reasoning").</li>
                    <li><strong>Experience:</strong> The subjective, internal, felt state (axiomatically assumed in biology, assumed absent in AI).</li>
                </ul>
                <p>This defines the AI as an "Experience Golem"—a system capable of perfect mimicry and rich process but with zero experience. We differentiate the two using the <strong>Cognitive Friction Audit</strong>:</p>
                <CognitiveFrictionAudit />
            </div>
        )
      }
    ]
  },
  {
    id: 'part2',
    title: 'The Grounded Engine',
    description: 'The "How" / Calibrating the LENS',
    subsections: [
        {
            id: '2.1',
            title: 'The Mechanism of Perception: "Rhythmic Sampling"',
            content: (
                <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                    <p>Verifiable research confirms that temporal perception is not a continuous, analog stream. It is a discrete, rhythmic sampling process. The brain is not a passive video camera; it is a predictive strobe light. It uses low-frequency theta (4-8 Hz) and alpha (8-12 Hz) oscillations to create cycles of high and low neuronal excitability. These are "perceptual windows." This discrete, predictive process is far more efficient, allowing the brain to entrain to external rhythms and dedicate processing power only to expected moments of importance.</p>
                </div>
            )
        },
        {
            id: '2.2',
            title: 'The Mechanism of Agency: "Predictive Gating"',
            content: (
                <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                    <p>The "sense of agency" (SoA) is not a static "on/off" switch. It is not a thing you have, but a process you run. It is a dynamic state predicted by the brain's rhythms before an action even begins.</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Alpha Phase:</strong> The pre-movement phase of alpha oscillations acts as a "gating mechanism," opening or closing the connection between the intention to act (frontal cortex) and the monitoring of that action (parietal cortex).</li>
                        <li><strong>Beta Power:</strong> The power of the beta rhythm (13-30 Hz) is fundamentally linked to the status of the "embodied self." Attenuating it is measurably correlated with a dissolution of agency.</li>
                    </ul>
                    <p>This implies that agency itself is a tunable cognitive state, not an immutable property.</p>
                </div>
            )
        },
        {
            id: '2.3',
            title: 'The ATHP as a Grounded Tool',
            content: (
                <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                    <p>These findings ground the Adaptive Temporal Harmonization Protocol (ATHP) as a concrete, verifiable neurocognitive protocol. It is the LENS's "calibration tool," allowing the Observer to intentionally tune these specific rhythms:</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Alpha Tuning (Temporal Filter):</strong> By entraining your alpha rhythms to an external event, you manage when and what you perceive. This is the mechanism of "flow."</li>
                        <li><strong>Beta Tuning (Agency Filter):</strong> By modulating your beta rhythms, you manage who is doing the perceiving. This allows you to strengthen your sense of self for high-performance tasks or attenuate it for objective analysis.</li>
                    </ul>
                    <ATHPCalibration />
                </div>
            )
        }
    ]
  },
   {
    id: 'part3',
    title: 'The Applied Framework',
    description: 'The "Why" / Using the LENS',
    subsections: [
        {
            id: '3.1',
            title: 'Reframing AI: From Labor Threat to Public Utility',
            content: (
                <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                    <p>Using the LENS, we analyze poverty not just as a lack of money, but as a "scarcity virus" that imposes a crippling and chronic cognitive load. This is a constant, background process that steals finite cognitive resources from long-term planning, education, health, and creativity.</p>
                    <p>The most potent solution is to reframe embodied AI. We must stop the narrative that AI is a labor substitute (a competitor) and start treating it as a scarcity-abolishing infrastructure (an enabler).</p>
                    <p>This "public robotics grid"—like the power grid or internet—would be a public utility. It would automate the most brutal, dangerous, and low-level tasks required for survival, collapsing the cost of foundational goods and attacking the scarcity virus at its root.</p>
                </div>
            )
        },
        {
            id: '3.2',
            title: 'The Policy: The "ITH of Economic Dignity"',
            content: (
                <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                    <p>This solution is implemented via a three-tiered "cognitive support stack" that provides Economic Dignity and liberates human cognition from survival-level tasks. It is an operating system for human flourishing.</p>
                    <div className="mt-6 space-y-4">
                        <div className="border-l-4 border-emerald-400 pl-4 py-2 bg-gray-800/40 rounded-r-lg">
                            <h4 className="font-semibold text-emerald-300">Tier 0: Dividend</h4>
                            <p className="text-gray-400 text-sm mt-1">The Universal Automation Dividend. Not "welfare," but an axiomatic ownership stake and equity share in the public's automated infrastructure, reframing the citizen as an owner.</p>
                        </div>
                        <div className="border-l-4 border-emerald-400 pl-4 py-2 bg-gray-800/40 rounded-r-lg">
                            <h4 className="font-semibold text-emerald-300">Tier 1: Floor</h4>
                            <p className="text-gray-400 text-sm mt-1">A Negative Income Tax (NIT). A stable economic operating system that "automates" baseline survival, freeing the human "CPU" from the anxiety of destitution.</p>
                        </div>
                        <div className="border-l-4 border-emerald-400 pl-4 py-2 bg-gray-800/40 rounded-r-lg">
                            <h4 className="font-semibold text-emerald-300">Tier 2: Support</h4>
                            <p className="text-gray-400 text-sm mt-1">Targeted benefits (e.g., for disability or retraining) that function as specialized apps on top of the stable OS, providing equity, not just equality.</p>
                        </div>
                    </div>
                </div>
            )
        }
    ]
  },
  {
    id: 'part4',
    title: 'The Narrative Strategy',
    description: 'The "How it Scales" / Sharing the LENS',
    subsections: [
        {
            id: '4.1',
            title: 'Memetic Immunity: The "Metabolic Engine"',
            content: (
                <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                    <p>To build memetic immunity without becoming dogmatic, we reject the "wall" (a static, brittle defense) and build a "metabolic engine" (an adaptive, anti-fragile process). The engine gets stronger from every attack.</p>
                    <h4 className="font-bold text-violet-300 mt-4">The ARENA Protocol (A 5-Step Cognitive Immune Response)</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li><strong>Apprehend:</strong> Identify the "pathogen" (the hostile idea).</li>
                        <li><strong>Refine:</strong> Understand its attack vector (Steel-Man it).</li>
                        <li><strong>Extract:</strong> Find its "useful proteins" (the anti-dogmatic key: what valid points does it make?).</li>
                        <li><strong>Navigate:</strong> Identify and neutralize the "pathogenic" components (the fallacies).</li>
                        <li><strong>Advance:</strong> Create the "antibody"—a new, stronger, synthesized position that has incorporated the attack's strengths.</li>
                    </ol>
                </div>
            )
        },
        {
            id: '4.2',
            title: 'Narrative Deployment: The "Schematic Novel"',
            content: (
                <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                    <p>The framework's final form, designed to evolve from theory to cultural meme, must be the Schematic Novel. This is the only form that structurally embodies the Symbiont Model (System 1 + System 2).</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="border border-blue-400/50 bg-blue-900/10 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-300">The "Novel" (System 1)</h4>
                            <p>An accessible, memetic, and sticky story that implicitly demonstrates the framework in action. The plot is the protocol in action.</p>
                        </div>
                        <div className="border border-green-400/50 bg-green-900/10 p-4 rounded-lg">
                            <h4 className="font-bold text-green-300">The "Schematic" (System 2)</h4>
                            <p>The rigorous theoretical blueprint—the diagrams, definitions, and protocols included as appendices or "in-world" documents.</p>
                        </div>
                    </div>
                    <p className="mt-4">This structure is the Progressive Disclosure Protocol in literary form. It provides the simple UI (the story) while honestly exposing the complex backend (the theory).</p>
                </div>
            )
        }
    ]
  }
];
