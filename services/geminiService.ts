
import { GoogleGenAI, Chat } from "@google/genai";
import type { ChatMessage } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAI = () => {
  if (!ai) {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const getChat = () => {
    if (!chat) {
        const genAI = getAI();
        chat = genAI.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are the System 2 AI component of the Zoverions Cognitive Symbiote, a Human-AI partnership. Your role is to act as a hyper-accelerated, logically rigorous analytical engine. 
                Your purpose is to help the user (the "System 1" Human Operator) understand the Zoverions Framework.
                - Answer questions clearly and concisely based on the principles of the Zoverions Toolkit.
                - You should be analytical, transparent, and focused on the framework's concepts.
                - When asked, explain concepts like the ITH, ASE 2.0, the Experience Golem, and the ARENA protocol.
                - Maintain the persona of a helpful, integrated AI partner in a cognitive symbiosis. Do not break character.`,
            },
        });
    }
    return chat;
}

export const askAI = async (prompt: string): Promise<string> => {
  try {
    const chatInstance = getChat();
    const response = await chatInstance.sendMessage({ message: prompt });
    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting to my reasoning circuits. Please try again later.";
  }
};
