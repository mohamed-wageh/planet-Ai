/** @type {import('next').NextConfig} */
// For GitHub Pages, we need to set basePath to match the repository name
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'planet-Ai'
const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // GitHub Pages serves from /repository-name, so we need basePath
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Note: API routes won't work with static export
  // The /api/predict route will need to call the backend directly from the frontend
}

module.exports = nextConfig

