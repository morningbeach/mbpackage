'use client'
type Opt = { key: string; label: string }

export function FiltersBar(){
  const categories: Opt[] = [
    { key: 'boxes', label: 'Package Boxes' },
    { key: 'gifts', label: 'Gifts' },
    { key: 'sets', label: 'Gift Sets' },
  ]
  const materials: Opt[] = ['Paper','Cotton','Jute','rPET','TPU'].map(m=>({key:m,label:m}))
  const finishes: Opt[] = ['Foil','Emboss','UV','Sewing'].map(f=>({key:f,label:f}))
  return (
    <div className="flex flex-wrap gap-2">
      <ChipGroup name="category" options={categories} />
      <Divider />
      <ChipGroup name="material" options={materials} />
      <ChipGroup name="finish" options={finishes} />
      <a href="/products" className="ml-auto text-sm underline underline-offset-4 opacity-70 hover:opacity-100">Clear</a>
    </div>
  )
}

function Divider(){ return <span className="h-6 w-px bg-neutral-200/80 dark:bg-white/10 mx-1" /> }

function ChipGroup({ name, options }:{ name:string; options: Opt[] }){
  return (
    <div className="flex items-center gap-2">
      {options.map(opt => (
        <FilterChip key={opt.key} name={name} value={opt.key} label={opt.label} />
      ))}
    </div>
  )
}

function FilterChip({ name, value, label }:{ name:string; value:string; label:string }){
  let href = `?${name}=${encodeURIComponent(value)}`
  let active = false
  if (typeof window !== 'undefined'){
    const url = new URL(window.location.href)
    url.searchParams.set(name, value)
    href = url.pathname + '?' + url.searchParams.toString()
    active = new URL(window.location.href).searchParams.get(name) === value
  }
  return (
    <a href={href} className={
      'text-xs rounded-full border border-hair px-3 py-1 ' + (active ? 'bg-brand text-white' : 'bg-white/80 dark:bg-neutral-900/80')
    }>
      {label}
    </a>
  )
}
