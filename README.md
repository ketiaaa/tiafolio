# tiafolio

Personal portfolio of [ketia](https://soksophoanketia.com) — IT professional based in Sydney, AU.

Built on the [chronark.com](https://github.com/chronark/chronark.com) open-source structure.

## Stack

- **Next.js 13** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **Contentlayer** (MDX project pages)
- **TypeScript**

## Setup

```bash
pnpm install
pnpm dev
```

> **Note**: You need the Cal Sans font at `public/fonts/CalSans-SemiBold.ttf`.
> Download free from [github.com/calcom/font](https://github.com/calcom/font).

## Adding Projects

Add `.mdx` files to `content/projects/`. Required frontmatter:

```mdx
---
title: My Project
description: Short description.
published: true
date: 2024-01-01
url: https://example.com
repository: https://github.com/...
---
```

## Deploy

Connect repo to [Vercel](https://vercel.com) — auto-detects Next.js.
