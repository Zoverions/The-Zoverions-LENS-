
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import Chatbot from './components/Chatbot';
import { ZoverionsContent } from './constants';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubSectionId, setActiveSubSectionId] = useState('1.1');

  const handleSelectSubSection = (id: string) => {
    setActiveSubSectionId(id);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };
  
  const activeSubSection = useMemo(() => {
    for (const section of ZoverionsContent) {
      const found = section.subsections.find(sub => sub.id === activeSubSectionId);
      if (found) return found;
    }
    return null;
  }, [activeSubSectionId]);

  return (
    <div className="flex h-screen w-full bg-gray-900 text-gray-200 overflow-hidden">
      <div 
        className={`fixed inset-0 bg-black/50 z-10 md:hidden transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      
      <Sidebar 
        sections={ZoverionsContent}
        activeSubSectionId={activeSubSectionId}
        onSelectSubSection={handleSelectSubSection}
        isOpen={isSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex md:hidden items-center justify-between p-4 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 flex-shrink-0">
            <h1 className="text-lg font-bold text-white">The Zoverions LENS</h1>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          <ContentDisplay subSection={activeSubSection} />
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

export default App;
