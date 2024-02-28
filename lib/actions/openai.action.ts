"use server"

import { openai } from "../utils";


export const createAboutusingAi = async ()=>{
    try {   

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: 'user', content: 'Say this is a test' }
            ],
            model: 'gpt-3.5-turbo',
          });

          console.log(chatCompletion.choices[0].message);
          
        
    } catch (error) {
        console.log(error);
        
    }
}