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