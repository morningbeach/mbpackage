import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'MB Gifts',
  description: 'Gifting & Packaging, Curated with Precision'
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="pb-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Header(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-neutral-200/60 dark:border-white/10 bg-white/60 dark:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight text-lg">MB Gifts</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/products" className="opacity-80 hover:opacity-100">Products</a>
          <a href="/blog" className="opacity-80 hover:opacity-100">Blog</a>
          <a href="/about" className="opacity-80 hover:opacity-100">About</a>
          <a href="/contact" className="inline-flex items-center rounded-full border border-hair px-3 py-1 shadow-soft hover:shadow transition">Inquiry</a>
        </nav>
      </div>
    </header>
  )
}

function Footer(){
  return (
    <footer className="border-t border-neutral-200/60 dark:border-white/10 py-10 text-sm opacity-70">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} MB Gifts</span>
        <div className="flex gap-4">
          <a href="/legal/privacy">Privacy</a>
          <a href="/legal/terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}
