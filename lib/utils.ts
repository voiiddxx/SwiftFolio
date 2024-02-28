import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import OpenAI from 'openai';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





export const openai = new OpenAI({
  apiKey: process.env[`${process.env.OPEN_AI_KEY}`], // This is the default and can be omitted
});


