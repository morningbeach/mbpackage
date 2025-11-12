// app/products/page.tsx

// ✅ 定義 Promise 版的 SearchParams 型別
type SearchParams = Promise<Record<string, string | string[] | undefined>>;

// ✅ 重要：searchParams 變成 Promise，必須 await
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams; // ← Next 15 規範：在 Server Component 內 await
  const q = (sp.q as string | undefined) ?? '';
  const page = Number(sp.page ?? 1);

  // 這裡先給個最小頁面，保證編譯能過。
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-xl font-bold">Products</h1>
      <p className="mt-2 text-sm text-gray-600">
        query: <b>{q || '（空）'}</b>，page: <b>{page}</b>
      </p>
    </main>
  );
}
