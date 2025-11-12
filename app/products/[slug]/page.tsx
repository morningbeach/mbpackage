// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function ProductPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params; // Next 15：params 要 await

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`, {
    // 保險起見：避免在建置時快取
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const product = await res.json();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>
      {/* 你自己的畫面… */}
    </main>
  );
}
