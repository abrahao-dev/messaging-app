// src/app/api/messages/route.ts
import { NextResponse } from 'next/server';

// Dummy data for the messages
const messages = [
  { id: 1, content: 'Hello, world!' },
  { id: 2, content: 'How are you doing?' },
  { id: 3, content: 'Next.js is awesome!' },
];

export async function GET() {
  // Returning the messages as a JSON response
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const { content } = await request.json();
  // Here, you would save the message to a database or do any processing
  const newMessage = { id: Date.now(), content };
  messages.push(newMessage);  // Temporarily adding the message to the array
  return NextResponse.json(newMessage);
}
