"use server";
import { chatgptClient } from "../lib/openai";
import { polishBlogJsonString } from "../utils/polishJson";
import { createClient } from "../utils/server";

export async function postBlog({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const response = await chatgptClient({
    system: `you are a tech genius and also an excellent in writter`,
    user: `This is the title of the blog, ${title}, and this is the content, ${content}. using this blog, please generate the following data in JSON format and Escape newline characters as “\n” inside the JSON string, make sure the excerpt is no less than 40 words {
      id: string; 
      title: string; 
      content: string; 
      excerpt?: string; 
      author: string; 
      date: string; 
      cover_image?: string; 
      slug: string; 
    }`,
  });

  const { choices } = response;
  if (!choices[0].message.content) return;
  const parsedBlog = polishBlogJsonString(choices[0].message.content);

  if (!parsedBlog) return;

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blogs")
    .insert([
      {
        title: parsedBlog.title,
        content: parsedBlog.content,
        excerpt: parsedBlog.excerpt,
        slug: parsedBlog.slug,
        author: "Nima Phuntsho",
      },
    ])
    .select();
  console.log(error);
  console.log(data);
}
