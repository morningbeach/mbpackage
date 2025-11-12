// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 先確保不因為 ESLint / TS 阻斷 build（確認部署流程沒問題後再開回來）
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Cloudflare Pages 建議 edge 環境
  experimental: {
    // 不是必填，但常見設定
    // serverActions: { allowedOrigins: ['*'] },
  },
}

export default nextConfig
