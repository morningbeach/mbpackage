export type Media = { type: 'image'|'video'; src: string; alt?: string }
export type Product = {
  id: string
  slug: string
  title: string
  summary: string
  category: 'boxes'|'gifts'|'sets'
  cover: string
  media: Media[]
  materials: string[]
  finishes: string[]
  specs: { size: string; moq: string; leadTime: string }
  badges?: string[]
  details: string[]
}
