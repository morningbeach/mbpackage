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
