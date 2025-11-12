'use client'
import type { Product } from '@/lib/types'

export function ProductCard({ product }: { product: Product }){
  return (
    <a href={`/products/${product.slug}`} className="group mb-4 block overflow-hidden rounded-3xl border border-neutral-200/60 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 shadow-soft transition will-change-transform">
      <div className="relative">
        <picture>
          <img src={product.cover} alt={product.title} loading="lazy" className="w-full h-auto img-fade" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
        </picture>
        {product.badges?.length ? (
          <div className="absolute top-3 left-3 flex gap-2">
            {product.badges.map((b, i)=>(
              <span key={i} className="text-[11px] uppercase tracking-wide bg-white/90 dark:bg-neutral-800/90 border border-hair rounded-full px-2 py-0.5">{b}</span>
            ))}
          </div>
        ):null}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium leading-snug">{product.title}</h3>
          <span className="text-xs opacity-60 capitalize">{product.category}</span>
        </div>
        <p className="mt-1 text-sm opacity-70 line-clamp-2">{product.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {[...product.materials.slice(0,2), ...product.finishes.slice(0,1)].map((t,i)=> (
            <span key={i} className="text-[11px] bg-neutral-100 dark:bg-neutral-800 rounded-full px-2 py-0.5 border border-hair opacity-80">{t}</span>
          ))}
        </div>
      </div>
    </a>
  )
}
