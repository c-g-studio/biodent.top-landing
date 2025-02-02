import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
      {
        userAgent: 'privacy-policy',
        allow: ['/'],
      },
      {
        userAgent: '*',
        disallow: ['/404'],
      },
    ],
  };
}
