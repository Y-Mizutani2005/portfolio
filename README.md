# Yuki.dev portfolio

Personal portfolio and blog site built with Next.js, TypeScript, Tailwind CSS, and Markdown content files.

The site is meant to show project work, writing, and a small custom Markdown publishing workflow. It is intentionally lightweight: content lives in `content/`, presentation lives in `src/`, and deployment is handled through Vercel.

## What This Repository Shows

- A Next.js App Router site with static Markdown content.
- A small content model for blog posts and works.
- Custom Markdown rendering with frontmatter metadata.
- Portfolio pages for projects such as Google Docs to WordPress.
- A GitHub activity section backed by a server-side API route.

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- unified / remark / rehype
- Vercel

## Project Structure

```text
content/
  blog/      Blog articles
  works/     Project write-ups
public/
  images/    Work thumbnails and screenshots
src/
  app/       App Router pages and API routes
  components/
  lib/       Markdown, post, and site utilities
```

## Local Development

```bash
npm install
npm run dev
```

The local server starts at `http://localhost:3000` by default.

For GitHub contribution display, create a local `.env.local` file:

```bash
GITHUB_TOKEN=your_read_only_token
```

Do not commit `.env.local` or personal access tokens.

## Content Status

This site is still being filled in. The current priority is making the works pages useful for internship applications, especially:

- Google Docs to WordPress
- Portfolio & Blog Site
- Student organization web work
- AI / LLM project write-ups

## Deployment

The production site is deployed on Vercel:

https://yukidev-xi.vercel.app
