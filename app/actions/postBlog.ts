"use server";
import { BlogPostSchema } from "../(client)/blogs/schema";
import { chatgptClient } from "../lib/openai";
import { getPublicUrl } from "../utils/publicURL";
import { sanitiseName } from "../utils/sanitiseImageName";
import { createClient } from "../utils/server";
import { uploadImage } from "../utils/uploadImg";

export async function postBlog(formData: FormData) {
  const file = formData.get("image") as File | null;
  if (!file) return;

  try {
    const response = await chatgptClient({
      system: `You are a highly skilled tech expert and an exceptional writer.`,
      user: `Generate a JSON object based on the following blog data. Do not include any extra words, symbols, or characters before or after the object. Escape newline characters as "\\n" inside the JSON string. The excerpt must be at least 40 words long.
  Blog title: ${formData.get("title")}
  Blog content: ${formData.get("content")}
  Return the data in the following structure:
  {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    author: string;
    date: string;
    cover_image?: string;
    slug: string;
  }`,
    });
    const { choices } = response;
    if (!choices[0].message.content) return;
    const parsedContent = BlogPostSchema.safeParse(
      JSON.parse(choices[0].message.content)
    );
    if (!parsedContent.success) return;
    const supabase = await createClient();
    const { data } = await supabase
      .from("blogs")
      .insert([
        {
          title: parsedContent.data.title,
          content: parsedContent.data.content,
          excerpt: parsedContent.data.excerpt,
          slug: parsedContent.data.slug,
          author: "Nima Phuntsho",
        },
      ])
      .select()
      .single();
    console.log(data);

    if (!data) return;

    const fileName = sanitiseName({
      name: file.name,
      slug: parsedContent.data.slug,
    });

    const fileURL = await uploadImage({ fileName: fileName, file: file });
    const url = await getPublicUrl(fileURL);

    const { error: updateError } = await supabase
      .from("blogs")
      .update({
        cover_image: url,
      })
      .eq("id", data.id);

    console.log(updateError);
  } catch (error) {
    console.log(error);
  }
}
