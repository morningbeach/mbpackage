// app/products/[slug]/page.tsx
export const runtime = 'edge';

type Params = Promise<{ slug: string }>;

export default async function ProductDetailPage({
  params,
}: { params: Params }) {
  const { slug } = await params;

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-xl font-bold">Product: {slug}</h1>
      <p className="mt-2 text-sm text-gray-600">
        前端頁面示意。實際資料請打 <code>/api/products/{slug}</code>（已接 D1）。
      </p>
    </main>
  );
}
