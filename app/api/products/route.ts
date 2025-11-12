// app/api/products/route.ts
export const runtime = 'edge';

// 在 Edge Runtime 下，Next 15 可用 cloudflare:env 取得綁定
import { env } from 'cloudflare:env';

type Row = {
  id: number;
  slug: string;
  name: string;
  price: number | null;
};

export async function GET() {
  const db = env.DB as D1Database;

  // 若尚未建表，先嘗試建立（幂等）
  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      price REAL
    );
  `);

  // demo 資料（幂等）
  await db
    .prepare(
      `INSERT OR IGNORE INTO products (slug, name, price)
       VALUES ('tote-bag', 'Tote Bag', 12.5),
              ('gift-box', 'Gift Box', 25.0);`
    )
    .run();

  const { results } = await db
    .prepare(`SELECT id, slug, name, price FROM products ORDER BY id DESC`)
    .all<Row>();

  return Response.json({ ok: true, data: results ?? [] });
}
