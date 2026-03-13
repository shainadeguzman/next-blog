import pool from "../db";

export async function fetchCategories() {
  try {
    const { rows } = await pool.query(`
      SELECT
        id,
        name,
        slug
      FROM categories
      ORDER BY name ASC
    `);

    return rows;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Failed to fetch categories.");
  }
}
