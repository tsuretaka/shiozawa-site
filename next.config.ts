import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryBasePath = isGitHubPages ? '/shiozawa-site' : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: repositoryBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: repositoryBasePath,
  },
};

export default nextConfig;
