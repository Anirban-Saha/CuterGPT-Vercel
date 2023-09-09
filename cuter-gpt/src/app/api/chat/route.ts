// endpoint /api/chat
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
export const runtime = "edge";
const config = new Configuration({
  apiKey: process.env.OPENAI_KEY!
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const body = await req.json();
  const { messages } = body;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages:messages,
    stream: true,
  });
  console.log(response);
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
