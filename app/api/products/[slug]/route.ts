// app/api/products/[slug]/route.ts
export async function GET(_req: Request, ctx: { params: { slug: string } }) {
  const { slug } = ctx.params;

  // 你原本抓資料的地方（示例）
  const res = await fetch(`https://your-data-source.example.com/products/${slug}`, {
    // 可視需求調整 cache
    cache: 'no-store',
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }

  const product = await res.json();
  return Response.json(product);
}
