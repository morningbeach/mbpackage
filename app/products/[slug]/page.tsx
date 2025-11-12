// app/products/[slug]/page.tsx
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  // 直接呼叫同站 API（相對路徑 OK）
  const res = await fetch(`/api/products/${slug}`, { cache: 'no-store' });
  if (!res.ok) {
    // 可自訂錯誤畫面或丟出 notFound()
    return <main className="container">找不到商品</main>;
  }

  const product = await res.json();

  return (
    <main className="container">
      <h1 className="text-xl font-bold">{product.name}</h1>
      {/* 其他畫面 */}
    </main>
  );
}
