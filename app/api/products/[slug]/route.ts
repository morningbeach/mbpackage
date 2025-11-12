// app/api/products/[slug]/route.ts
import { NextResponse, NextRequest } from "next/server";

type Params = Promise<{ slug: string }>;

export async function GET(
  _req: NextRequest,
  { params }: { params: Params }
) {
  const { slug } = await params; // Next 15：params 要 await

  // TODO: 這裡換成你實際的資料來源
  // 例如讀 D1 / KV / 外部 API
  const product = await getProductBySlug(slug);

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}

// 範例：請換成你的實作
async function getProductBySlug(slug: string) {
  // demo data
  if (slug === "demo") {
    return { slug, name: "Demo Product", description: "Just a demo." };
  }
  return null;
}
