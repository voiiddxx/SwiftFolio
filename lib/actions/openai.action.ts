"use server"

import { AiTextGenreation } from "@/types";
import { openai } from "../utils";




export const createAboutusingAi = async ({promptMessage} : AiTextGenreation)=>{
    try {   
        const aiResponse = await openai.chat.completions.create({
            model:'gpt-3.5-turbo',
            messages:[
                {
                    role:'user',
                    content:promptMessage
                }
            ]
        });

        console.log(aiResponse.choices[0].message.content);

        return JSON.parse(JSON.stringify(aiResponse.choices[0].message.content));

        
        
          
        
    } catch (error) {
        console.log(error);
        
    }
}