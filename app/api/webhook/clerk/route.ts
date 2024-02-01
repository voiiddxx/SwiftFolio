"use server"

import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent, clerkClient } from '@clerk/nextjs/server'
import { emailAddresses } from '@clerk/nextjs/api'
import connectToDatabase from '@/lib/database/mongodb'
import User from '@/lib/database/models/user.model'
import { NextResponse } from 'next/server'
 
export async function POST(req: Request) {
 
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
 
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }
 
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");
 
  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }
 
  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);
 
  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);
 
  let evt: WebhookEvent
 
  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }
 
  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  if(eventType=='user.created'){
    const {id , first_name , last_name ,  email_addresses , username , image_url} = evt.data;
    const user = {
        clerkId:id,
        username:username,
        email:email_addresses[0].email_address,
        firstname:first_name,
        lastname:last_name,
        avatar:image_url
    }

    try {
       await connectToDatabase();
        const newUser = await User.create(user);
        const registerUser = await JSON.parse(JSON.stringify(newUser));
        if(registerUser) {
            await clerkClient.users.updateUserMetadata(id, {
              publicMetadata: {
                userId: registerUser._id
              }
            })
          }
          return NextResponse.json({ message: 'OK', user: registerUser })
        console.log(registerUser);
        


    } catch (error) {
        throw new Error(error as string);
    }
  }
 
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  console.log('Webhook body:', body)
 
  return new Response('', { status: 200 })
}
 