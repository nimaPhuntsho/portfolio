import path from "path";

export function sanitiseName({
  name,
  slug,
}: {
  name: string;
  slug: string;
}): string {
  const ext = path.extname(name);
  return `${slug}${ext}`;
}
