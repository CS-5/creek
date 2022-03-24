# Creek

Creek is a Livestreaming/VOD platform powered by Cloudflare [Stream](https://www.cloudflare.com/products/cloudflare-stream/), [Pages](https://pages.cloudflare.com/), and [Workers](https://workers.cloudflare.com/). It is intended for high-skill, low-budget teams who are looking for an alternative to YouTube/Vimeo/Restream/Facebook.

## Features

### MVP/1.0

- [ ] Livestreaming with Cloudflare Stream backend
- [ ] Re-broadcasting to YouTube/Vimeo/Facebook
- [ ] Stream scheduling (Pushes new stream events to YouTube/Vimeo/Facebook if in use)
- [ ] Multi-user authentication

### 2.0

- [ ] Video uploads (w/o livestream)
- [ ] "Channel" overview (With playlists and sorting)
- [ ] Stream toolkit (Utilities for integrating with [BitFocus Companion](https://bitfocus.io/companion/), OBS, etc. - Same idea as [Hologram](https://github.com/PulseDevelopmentGroup/Hologram))
- [ ] Integration with ChurchOnlinePlatform(?)

### 3.0

- [ ] Chat aggregation
- [ ] SaaS offering (Billing dashboard, managed backend, etc.)

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
