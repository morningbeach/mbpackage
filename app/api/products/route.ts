export const runtime = 'edge'
import { getRequestContext } from '@cloudflare/next-on-pages'

export async function GET(request: Request){
  const { env } = getRequestContext()
  const url = new URL(request.url)
  const category = url.searchParams.get('category') || undefined
  const material = url.searchParams.get('material') || undefined
  const finish   = url.searchParams.get('finish')   || undefined

  let q = `
  SELECT p.id, p.slug, p.title, p.summary, p.category, p.cover,
         p.size as specs_size, p.moq as specs_moq, p.lead_time as specs_lead_time
  FROM products p
  `
  const where: string[] = []
  if (category) where.push(`p.category = ?1`)
  if (material) where.push(`EXISTS (SELECT 1 FROM product_materials pm WHERE pm.product_id = p.id AND pm.material = ?2)`)
  if (finish)   where.push(`EXISTS (SELECT 1 FROM product_finishes  pf WHERE pf.product_id = p.id AND pf.finish   = ?3)`)
  if (where.length) q += ` WHERE ` + where.join(' AND ')
  q += ` ORDER BY p.created_at DESC LIMIT 200`

  const rows = await env.DB.prepare(q).bind(category ?? null, material ?? null, finish ?? null).all()

  const out:any[] = []
  for (const r of rows.results as any[]){
    const pid = r.id
    const media     = await env.DB.prepare(`SELECT type, src, alt FROM product_media     WHERE product_id = ?1 ORDER BY idx ASC`).bind(pid).all()
    const materials = await env.DB.prepare(`SELECT material       FROM product_materials WHERE product_id = ?1`).bind(pid).all()
    const finishes  = await env.DB.prepare(`SELECT finish         FROM product_finishes  WHERE product_id = ?1`).bind(pid).all()
    const details   = await env.DB.prepare(`SELECT detail         FROM product_details   WHERE product_id = ?1 ORDER BY idx ASC`).bind(pid).all()
    const badges    = await env.DB.prepare(`SELECT badge          FROM product_badges    WHERE product_id = ?1 ORDER BY idx ASC`).bind(pid).all()
    out.push({
      id: r.id, slug: r.slug, title: r.title, summary: r.summary, category: r.category, cover: r.cover,
      media: media.results || [],
      materials: (materials.results||[]).map((x:any)=>x.material),
      finishes:  (finishes.results ||[]).map((x:any)=>x.finish),
      specs: { size: r.specs_size, moq: r.specs_moq, leadTime: r.specs_lead_time },
      details: (details.results||[]).map((x:any)=>x.detail),
      badges:  (badges.results ||[]).map((x:any)=>x.badge),
    })
  }

  return new Response(JSON.stringify(out), { headers: { 'content-type': 'application/json' } })
}
