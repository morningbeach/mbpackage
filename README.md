# MB Gifts — FULL (Next.js 15 + Tailwind + Cloudflare D1 + Edge API)

A production-ready starter with:
- Masonry catalog UI (AlbumGrid, ProductCard, FiltersBar)
- Product detail with lightbox MediaGallery
- Edge API routes reading from Cloudflare D1
- About / Blog / Contact pages
- DB schema & seed

## Deploy to Cloudflare Pages
1) Create D1:
```bash
wrangler d1 create mb_gifts_db
wrangler d1 execute mb_gifts_db --file=./db/schema.sql
wrangler d1 execute mb_gifts_db --file=./db/seed.sql
```
2) Bind in Pages → Project → Settings → **Functions → D1 database bindings**  
   - **Binding name:** `DB`  
   - **Database:** `mb_gifts_db`
3) Build command: `pnpm install && pnpm build` (or `npm i && npm run build`)
4) Open `/`, `/products`, `/api/products`, `/api/products/magnetic-rigid-box`

## Local Dev (optional)
```bash
pnpm i
# If you want to emulate bindings:
wrangler pages dev .
```

## Next Steps
- Add i18n fields or a headless CMS (Sanity) without changing UI components.
- Add cache (KV or Cache API) for faster product lists.
- Wire /contact form to an API route or third-party form service.
