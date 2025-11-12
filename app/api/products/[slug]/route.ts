export const runtime = 'edge'
import { getRequestContext } from '@cloudflare/next-on-pages'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const { env } = getRequestContext()

  // 取主產品
  const row = await env.DB.prepare(
    `SELECT id, slug, title, summary, category, cover,
            size AS specs_size, moq AS specs_moq, lead_time AS specs_lead_time
     FROM products
     WHERE slug = ?1
     LIMIT 1`
  ).bind(params.slug).first()

  if (!row) {
    return new Response('Not found', { status: 404 })
  }

  const pid = (row as any).id

  // 關聯資料
  const [media, materials, finishes, details, badges] = await Promise.all([
    env.DB.prepare(
      `SELECT type, src, alt
       FROM product_media
       WHERE product_id = ?1
       ORDER BY idx ASC`
    ).bind(pid).all(),

    env.DB.prepare(
      `SELECT material
       FROM product_materials
       WHERE product_id = ?1`
    ).bind(pid).all(),

    env.DB.prepare(
      `SELECT finish
       FROM product_finishes
       WHERE product_id = ?1`
    ).bind(pid).all(),

    env.DB.prepare(
      `SELECT detail
       FROM product_details
       WHERE product_id = ?1
       ORDER BY idx ASC`
    ).bind(pid).all(),

    env.DB.prepare(
      `SELECT badge
       FROM product_badges
       WHERE product_id = ?1
       ORDER BY idx ASC`
    ).bind(pid).all(),
  ])

  const out = {
    id:            (row as any).id,
    slug:          (row as any).slug,
    title:         (row as any).title,
    summary:       (row as any).summary,
    category:      (row as any).category,
    cover:         (row as any).cover,
    media:         media.results || [],
    materials:    (materials.results || []).map((x: any) => x.material),
    finishes:     (finishes.results  || []).map((x: any) => x.finish),
    specs: {
      size:       (row as any).specs_size,
      moq:        (row as any).specs_moq,
      leadTime:   (row as any).specs_lead_time,
    },
    details:      (details.results || []).map((x: any) => x.detail),
    badges:       (badges.results  || []).map((x: any) => x.badge),
  }

  return new Response(JSON.stringify(out), {
    headers: { 'content-type': 'application/json' },
  })
}
