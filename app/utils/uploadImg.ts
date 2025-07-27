import { createClient } from "./server";

export async function uploadImage({
  fileName,
  file,
}: {
  fileName: string;
  file: File;
}) {
  const filePath = `images/${Date.now()}-${fileName}`;
  const supabase = await createClient();
  const { error, data } = await supabase.storage
    .from("blog")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  console.log(error);

  if (error) throw new Error(error.message);
  return data.path;
}
