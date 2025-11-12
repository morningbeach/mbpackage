import { listProducts } from '@/lib/repos/d1Products'
import { AlbumGrid } from '@/components/AlbumGrid'
import { FiltersBar } from '@/components/FiltersBar'

export default async function ProductsPage({ searchParams }: { searchParams: Record<string,string|string[]|undefined> }){
  const products = await listProducts({
    category: searchParams.category as string|undefined,
    material: searchParams.material as string|undefined,
    finish:   searchParams.finish as string|undefined,
  })
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Products</h1>
          <p className="text-sm opacity-70">Boxes · Gifts · Gift Sets — filter by material, finish, and more.</p>
        </div>
        <FiltersBar />
      </div>
      <AlbumGrid products={products} />
    </div>
  )
}
