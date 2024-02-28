import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import OpenAI from 'openai';


const apikey = "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";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export const openai = new OpenAI({
  apiKey: apikey,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});