import { createClient } from "./server";

export async function getPublicUrl(fileUrl: string) {
  const supabase = await createClient();
  const { data } = await supabase.storage.from("blog").getPublicUrl(fileUrl);
  if (!data) throw new Error("no image found");
  return data.publicUrl;
}
