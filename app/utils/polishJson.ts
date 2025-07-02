export type BlogTest = {
  id: string; // Unique identifier (UUID or slug)
  title: string; // Blog post title
  content: string; // Full blog body (HTML or markdown)
  excerpt: string; // Optional short preview of the post
  author: string; // Author name
  date: string; // ISO 8601 format (e.g., "2024-06-26")
  cover_image?: string; // Optional image URL
  slug: string; // URL-friendly identifier (e.g., "my-first-blog")
};

export function polishBlogJsonString(raw: string): BlogTest | null {
  try {
    // Remove the ```json and ``` parts
    const jsonStart = raw.indexOf("```json");
    const jsonEnd = raw.lastIndexOf("```");
    const jsonString = raw.slice(jsonStart + 7, jsonEnd).trim();

    // Parse the JSON string
    const blogPost: BlogTest = JSON.parse(jsonString);

    // Optional cleanup: trim fields
    blogPost.title = blogPost.title.trim();
    blogPost.excerpt = blogPost.excerpt!.trim();
    blogPost.content = blogPost.content;

    return blogPost;
  } catch (err) {
    console.error("Error parsing blog JSON:", err);
    return null;
  }
}
