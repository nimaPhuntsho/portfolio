import Image from "next/image";
import { notFound } from "next/navigation";
import { createClient } from "@/app/utils/server";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogId({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  // const result = supabase.storage.from("blog").getPublicUrl("test.png");
  // console.log(result.data.publicUrl);

  // console.log(data);

  if (error) throw error;
  if (!data) notFound();
  if (!data.cover_image) return;

  console.log(data.cover_image);

  return (
    <div key={data.id} className={`flex flex-col mt-10`}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <h1 className="md:text-4xl text-2xl">{data.title}</h1>
          <div className="flex items-center gap-2 font-extralight ">
            <p> {data.author} </p>
            <p> {new Date(data.date).toDateString()} </p>
          </div>
        </div>
        <div className="w-full h-[400px] relative">
          <Image
            className="rounded-lg"
            src={data.cover_image}
            fill
            alt="home"
          />
        </div>
        {data.content.split("\n").map((data, index) => (
          <p className="text-justify" key={index}>
            {data}
          </p>
        ))}
      </div>
    </div>
  );
}
