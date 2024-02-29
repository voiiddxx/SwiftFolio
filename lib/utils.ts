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