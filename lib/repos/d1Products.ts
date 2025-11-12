import type { Product } from '@/lib/types'

export async function listProducts(filters?: { category?: string; material?: string; finish?: string }): Promise<Product[]>{
  const params = new URLSearchParams()
  if (filters?.category) params.set('category', filters.category)
  if (filters?.material) params.set('material', filters.material)
  if (filters?.finish) params.set('finish', filters.finish)
  const res = await fetch('/api/products' + (params.toString() ? `?${params.toString()}` : ''), { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function getProductBySlug(slug: string): Promise<Product | null>{
  const res = await fetch(`/api/products/${slug}`, { cache: 'no-store' })
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Failed to fetch product')
  return res.json()
}
