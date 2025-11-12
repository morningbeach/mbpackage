export const runtime = 'edge'
import { getRequestContext } from '@cloudflare/next-on-pages'

export async function GET() {
  const { env } = getRequestContext()

  try {
    const db = (env as any).DB
    const { results } = await db.prepare(
      `SELECT id, slug, name, description, price, image_url
       FROM products
       ORDER BY id DESC
       LIMIT 100`
    ).all()

    return Response.json(results ?? [])
  } catch (err: any) {
    return Response.json({ error: 'DB error', detail: String(err?.message ?? err) }, { status: 500 })
  }
}
