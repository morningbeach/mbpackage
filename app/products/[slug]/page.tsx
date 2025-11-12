import { getProductBySlug, listProducts } from '@/lib/repos/d1Products'
import { MediaGallery } from '@/components/MediaGallery'
import { AlbumGrid } from '@/components/AlbumGrid'

export default async function ProductDetailPage({ params }: { params: { slug: string } }){
  const product = await getProductBySlug(params.slug)
  if(!product){
    return <div className="py-20 text-center opacity-70">Not found.</div>
  }
  const others = (await listProducts()).filter(p=>p.slug!==product.slug).slice(0,6)
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7">
        {/* client component */}
        <MediaGallery media={product.media} />
      </div>
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">{product.title}</h1>
          <p className="opacity-75">{product.summary}</p>
        </div>
        <div className="rounded-3xl border border-neutral-200/60 dark:border-white/10 p-5">
          <h3 className="font-medium mb-3">Key Specs</h3>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <dt className="opacity-60">Category</dt><dd>{product.category}</dd>
            <dt className="opacity-60">Size</dt><dd>{product.specs.size}</dd>
            <dt className="opacity-60">Materials</dt><dd>{product.materials.join(', ')}</dd>
            <dt className="opacity-60">Finishes</dt><dd>{product.finishes.join(', ')}</dd>
            <dt className="opacity-60">MOQ</dt><dd>{product.specs.moq}</dd>
            <dt className="opacity-60">Lead time</dt><dd>{product.specs.leadTime}</dd>
          </dl>
          <div className="pt-4">
            <a href={`/contact?pid=${product.slug}`} className="inline-flex items-center rounded-full bg-brand text-white px-5 py-2.5 shadow-soft">Request a quote</a>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Details</h3>
          <ul className="list-disc pl-5 opacity-85 text-sm">
            {product.details.map((d, i) => (<li key={i}>{d}</li>))}
          </ul>
        </div>
      </div>
      <div className="lg:col-span-12 pt-6">
        <h3 className="font-medium mb-4">You may also like</h3>
        <AlbumGrid products={others} />
      </div>
    </article>
  )
}
