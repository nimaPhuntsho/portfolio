import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:
    "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",
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
