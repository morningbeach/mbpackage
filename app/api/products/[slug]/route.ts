// app/products/[slug]/page.tsx
import type { PageProps } from 'next'
export const runtime = 'edge' // 可留可不留

export default async function ProductPage(
  { params }: PageProps<{ slug: string }>
) {
  const { slug } = await params; // ← 重點：await 取得 slug

  // 你的資料抓取（用相對路徑在 CF Pages 上也可）
  const res = await fetch(`/api/products/${slug}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load product');
  const product = await res.json();

  return (
    <main className="container">
      <h1 className="text-xl font-bold">{product.name}</h1>
      {/* 其他畫面 */}
    </main>
  );
}
export const runtime = 'edge'
import { getRequestContext } from '@cloudflare/next-on-pages'

export async function GET(_request: Request, context: any) {
  const { env } = getRequestContext()
  const slug = context?.params?.slug as string | undefined

  if (!slug) {
    return Response.json({ error: 'Missing slug' }, { status: 400 })
  }

  try {
    const db = (env as any).DB
    const stmt = db.prepare(
      `SELECT id, slug, name, description, price, image_url
       FROM products
       WHERE slug = ?1
       LIMIT 1`
    )
    const { results } = await stmt.bind(slug).all()

    if (!results || results.length === 0) {
      return Response.json({ error: 'Not found' }, { status: 404 })
    }

    return Response.json(results[0])
  } catch (err: any) {
    return Response.json({ error: 'DB error', detail: String(err?.message ?? err) }, { status: 500 })
  }
}
