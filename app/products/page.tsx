import { listProducts } from '@/lib/repos/d1Products'
import { AlbumGrid } from '@/components/AlbumGrid'

export default async function Page(){
  const products = await listProducts()
  return (
    <div className="space-y-12">
      <Hero />
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold tracking-tight">Featured</h2>
          <a href="/products" className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">View all</a>
        </div>
        <AlbumGrid products={products.slice(0,8)} />
      </section>
    </div>
  )
}

function Hero(){
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[radial-gradient(50%_50%_at_50%_0%,rgba(31,111,235,0.18),transparent_60%)] border border-neutral-200/60 dark:border-white/10 p-10 sm:p-16">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">Gifting & Packaging, Curated with Precision</h1>
        <p className="text-base sm:text-lg opacity-80">Premium boxes, curated gifts, and modular gift sets. Discover materials, finishes, and production details with a gallery-first experience.</p>
        <div className="flex gap-3 pt-2">
          <a href="/products" className="rounded-full bg-brand text-white px-5 py-2.5 shadow-soft">Explore products</a>
          <a href="/about" className="rounded-full border border-hair px-5 py-2.5">About us</a>
        </div>
      </div>
    </section>
  )
}
