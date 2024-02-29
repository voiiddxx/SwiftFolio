"use server"

import { AiTextGenreation, GenreateImageParams } from "@/types";
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


export const genreateCustomImageusingAI = async ({promptMessage}:GenreateImageParams)=>{
    try {
        const AiImageRes = await openai.images.generate({
            model: "dall-e-3",
            prompt:promptMessage,
            size:"512x512",
            quality:"standard",
            n:1
        });
        console.log(AiImageRes.data[0].url);
        return JSON.parse(JSON.stringify(AiImageRes.data[0].url));
        
        
    } catch (error) {
        
    }
}