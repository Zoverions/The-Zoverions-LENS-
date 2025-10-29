
import { ReactNode } from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SubSection {
  id: string;
  title: string;
  content: ReactNode;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  subsections: SubSection[];
}

export type ContentData = Section[];
