'use client'
import type { Product } from '@/lib/types'
import { ProductCard } from '@/components/ProductCard'

export function AlbumGrid({ products }: { products: Product[] }){
  return (
    <div className="masonry [column-width:18rem] sm:[column-width:20rem]">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
