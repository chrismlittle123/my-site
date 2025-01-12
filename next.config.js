import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: [
        'http://localhost:3000',
        'https://localhost:3000',
        'http://localhost:3001',
        'https://localhost:3001',
        'https://simply-comply-frontend.vercel.app',
        'https://simply-comply.vercel.app',
        'https://*.simply-comply.vercel.app',
        'https://simply-comply-api.vercel.app'
      ],
      bodySizeLimit: '2mb'
    },
    optimizePackageImports: ['@heroicons/react', '@radix-ui/react-*', 'lucide-react']
  },
  serverExternalPackages: [],
  output: process.env.VERCEL ? undefined : 'standalone',
  distDir: '.next',
  poweredByHeader: false,
  generateEtags: false,
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
      };
    }
    
    return config;
  },
}

export default withBundleAnalyzer(nextConfig) 