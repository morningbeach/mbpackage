'use client'
import { useState } from 'react'
import type { Media } from '@/lib/types'

export function MediaGallery({ media }:{ media: Media[] }){
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  return (
    <div>
      <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200/60 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 cursor-zoom-in" onClick={()=>setOpen(true)}>
        {media[0]?.type === 'image' ? (
          <img src={media[0].src} alt={media[0].alt||''} className="w-full h-full object-cover img-fade" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
        ) : (
          <video src={media[0].src} className="w-full h-full object-cover" controls />
        )}
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {media.slice(0,10).map((m, i)=> (
          <button key={i} onClick={()=>{setIdx(i); setOpen(true)}} className="aspect-square overflow-hidden rounded-xl border border-neutral-200/60 dark:border-white/10">
            {m.type==='image' ? <img src={m.src} alt="" className="w-full h-full object-cover"/> : <video src={m.src} className="w-full h-full object-cover"/>}
          </button>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center" onClick={()=>setOpen(false)}>
          <div className="max-w-5xl w-full p-4" onClick={(e)=>e.stopPropagation()}>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
              {media[idx]?.type==='image' ? (
                <img src={media[idx].src} alt="" className="w-full h-full object-contain"/>
              ) : (
                <video src={media[idx].src} className="w-full h-full object-contain" controls autoPlay />
              )}
            </div>
            <div className="mt-3 flex items-center justify-between text-white/80 text-sm">
              <span>{idx+1} / {media.length}</span>
              <div className="flex gap-2">
                <button className="underline" onClick={()=>setIdx((i)=> (i-1+media.length)%media.length)}>Prev</button>
                <button className="underline" onClick={()=>setIdx((i)=> (i+1)%media.length)}>Next</button>
                <button className="underline" onClick={()=>setOpen(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
