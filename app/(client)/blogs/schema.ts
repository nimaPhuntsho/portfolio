export type BlogPost = {
  id: string; // Unique identifier (UUID or slug)
  title: string; // Blog post title
  content: string[]; // Full blog body (HTML or markdown)
  excerpt?: string; // Optional short preview of the post
  author: string; // Author name
  date: string; // ISO 8601 format (e.g., "2024-06-26")
  cover_image: string | null; // Optional image URL
  slug: string; // URL-friendly identifier (e.g., "my-first-blog")
};
