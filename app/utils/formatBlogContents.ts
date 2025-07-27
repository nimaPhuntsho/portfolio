import { chatgptClient } from "../lib/openai";

export async function formatContents(raw: string) {
  const { choices } = await chatgptClient({
    system: "you are an execellent writer",
    user: `This is the blog content ${raw}, please read thoroughly and seperate into paragraphs where it is need and return me with an array of strings in clean JSON format`,
  });

  const contents = choices[0].message.content!;
  console.log(JSON.parse(contents));

  const jsonMatch = raw.match(/```json([\s\S]*?)```/)!;
  // console.log(jsonMatch);

  const jsonContents: string[] = JSON.parse(jsonMatch[1]);
  return jsonContents;
}
