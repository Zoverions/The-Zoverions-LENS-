
import React from 'react';
import type { SubSection } from '../types';

interface ContentDisplayProps {
  subSection: SubSection | null;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ subSection }) => {
  if (!subSection) {
    return (
      <div className="p-8 text-center text-gray-500">
        Select a section to begin.
      </div>
    );
  }

  return (
    <article key={subSection.id} className="p-6 md:p-10 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
        {subSection.title}
      </h1>
      <div className="mt-6">
        {subSection.content}
      </div>
    </article>
  );
};

export default ContentDisplay;
