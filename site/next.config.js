/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://tonyhsu2719.github.io/kasmrepo/1.0/icon.png',
    listUrl: 'https://tonyhsu2719.github.io/kasmrepo/',
    contactUrl: 'https://github.com/tonyhsu2719/kasmrepo/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasmrepo/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
