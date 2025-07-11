import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY!,
});

export async function chatgptClient({
  system,
  user,
}: {
  system: string;
  user: string;
}) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "system",
        content: system,
      },
      { role: "user", content: user },
    ],
  });

  return completion;
}
