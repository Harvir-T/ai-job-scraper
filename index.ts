import * as dotenv from 'dotenv';
dotenv.config();
import { OpenAI } from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


interface JobListing {
  company: string;
  position: string;
  description: string;
}

export async function enrichJobWithAI(job: JobListing) {
    const prompt =  `You are an AI assistant. A user is collecting job listings. Given the following job description: ${job.description} Return: 1. A short one-line summary.2. The category 3. The key skills needed for this job. Respond in JSON format with keys: summary, category, skills`;
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt || "No prompt provided" }],
        model: "gpt-3.5-turbo"
  });
    const responseText = chatCompletion.choices[0].message.content || "";

     try {
        return JSON.parse(responseText);
     } catch (e) {
        console.error("Failed to parse OpenAI response:", responseText);
        return null;
    }
}


// Test
const sampleJob: JobListing = {
  company: "RemoteOK",
  position: "Frontend Developer",
  description: "Looking for a frontend developer with experience in React and TypeScript.",
};


enrichJobWithAI(sampleJob).then((aiData) => {
    console.log("AI Enrichment:", aiData);
})

