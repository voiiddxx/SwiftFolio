"use server"

import { AiTextGenreation, GenreateImageParams } from "@/types";


import OpenAI from 'openai';



 const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
    dangerouslyAllowBrowser: true // This is the default and can be omitted
  });



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

        console.log(aiResponse.choices);

        return JSON.parse(JSON.stringify(aiResponse.choices[0].message.content));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


export const genreateCustomImageusingAI = async ({promptMessage}:GenreateImageParams)=>{
    try {

        
        const res = await openai.images.generate({
            model:"dall-e-2",
            prompt:promptMessage,
            quality:'hd',
            n:1
        });
        return JSON.parse(JSON.stringify(res.data[0].url));
    } catch (error) {
        
    }
}