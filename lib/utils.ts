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










