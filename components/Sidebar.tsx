
import React from 'react';
import type { Section } from '../types';

interface SidebarProps {
  sections: Section[];
  activeSubSectionId: string;
  onSelectSubSection: (id: string) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSubSectionId, onSelectSubSection, isOpen }) => {
  return (
    <aside className={`absolute md:relative z-20 md:z-auto w-64 md:w-72 lg:w-80 h-full bg-gray-900/80 backdrop-blur-md border-r border-gray-700/50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex-shrink-0`}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
          The Zoverions LENS
        </h1>
        <p className="text-sm text-gray-400 mt-1">An Architecture for Symbiotic Cognition</p>
      </div>
      <nav className="mt-4 px-4 pb-8 h-[calc(100%-120px)] overflow-y-auto">
        {sections.map(section => (
          <div key={section.id} className="mb-6">
            <h2 className="px-2 text-xs font-bold uppercase text-gray-500 tracking-wider">{section.title}</h2>
            <p className="px-2 text-sm text-gray-400 mb-2">{section.description}</p>
            <ul className="space-y-1">
              {section.subsections.map(sub => (
                <li key={sub.id}>
                  <button
                    onClick={() => onSelectSubSection(sub.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center ${activeSubSectionId === sub.id
                      ? 'bg-cyan-500/10 text-cyan-300 font-semibold'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-200 ${activeSubSectionId === sub.id ? 'bg-cyan-400' : 'bg-gray-600'}`}></span>
                    {sub.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
