import pool from "../db";

export async function fetchBlogs() {
  try {
    const data = await pool.query("SELECT * FROM posts");
    return data.rows;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Failed to fetch all blogs.");
  }
}
