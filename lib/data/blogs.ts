import pool from "../db";

export async function fetchBlogs() {
  try {
    const data = await pool.query(`
        SELECT
        posts.*,
        categories.name AS category
      FROM posts
      LEFT JOIN categories
      ON posts.category_id = categories.id
      ORDER BY posts.created_at DESC`);
    return data.rows;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Failed to fetch all blogs.");
  }
}
