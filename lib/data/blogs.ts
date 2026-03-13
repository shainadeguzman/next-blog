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

export async function fetchCategoryPageData(slug: string) {
  try {
    const categoryResult = await pool.query(
      `
      SELECT id, name, slug
      FROM categories
      WHERE slug = $1
      LIMIT 1
      `,
      [slug],
    );

    const category = categoryResult.rows[0] ?? null;

    const blogsResult = await pool.query(
      `
      SELECT
        posts.*,
        categories.name AS category,
        categories.slug AS category_slug
      FROM posts
      LEFT JOIN categories
        ON posts.category_id = categories.id
      WHERE categories.slug = $1
      ORDER BY posts.published_at DESC
      `,
      [slug],
    );

    return {
      category,
      blogs: blogsResult.rows,
    };
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Failed to fetch category page data.");
  }
}
