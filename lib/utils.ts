import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import OpenAI from 'openai';


const apikeyforopenai = "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";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export const openai = new OpenAI({
  apiKey: apikeyforopenai,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});