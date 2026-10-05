# Echo Productions

Professional live production, AV, and technical support website.

## 🌐 Live site

The project is deployed with Vercel. The GitHub repository is the source of the website.\n\n[![Visit ECHO Productions](https://img.shields.io/badge/Visit-ECHO%20Productions-111827?style=for-the-badge&logo=vercel&logoColor=white)](https://echoproductions.runs-at.dev/)\n\n**Live website:** https://echoproductions.runs-at.dev/

## Features

- Modern responsive Echo Productions website
- Services and pricing
- Portfolio with real production photos
- Production capabilities
- Production Resources library
- Quote and contact forms
- Echo Tech Assist for production + IT questions
- Mobile-friendly dark production-focused UI
- SEO metadata

## Echo Tech Assist

Echo Tech Assist is a feature of the site, not the purpose of the entire site. It is intentionally focused on **production and IT** topics, including:

- Live audio, mixing, signal flow, and consoles
- Video, cameras, graphics, and switching
- Lighting and DMX
- Streaming and OBS
- Networking and production networks
- Windows, macOS, Linux, hardware, and software
- Programming and technical troubleshooting

Questions outside production and IT are outside Echo Tech's intended scope.

## Run locally

Requirements:

- Node.js
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open **http://localhost:3000**.

Build for production:

```bash
npm run build
npm run start
```

## Environment variables

Copy the example file:

```bash
cp .env.example .env.local
```

Then add your own values. **Never commit real API keys or secrets.**

### Email

`RESEND_API_KEY` — server-side email provider key  
`ECHO_CONTACT_EMAIL` — destination for contact/quote messages  
`ECHO_FROM_EMAIL` — verified sender address

### Echo Tech AI

`GROQ_API_KEY` — server-side AI provider key  
`GROQ_MODEL` — model used by the technical assistant

The repository intentionally includes only placeholder values in `.env.example`.

## Project structure

```
app/
├── api/help/          # Echo Tech API
├── about/             # About
├── capabilities/      # Technical capabilities
├── contact/           # Contact
├── help/              # Echo Tech Assist
├── portfolio/         # Portfolio
├── pricing/           # Pricing
├── quote/             # Quote request
├── resources/         # Production Resources
├── services/          # Services
├── globals.css        # Global styles
└── page.tsx           # Homepage

public/
└── photos/            # Production photos
```

## Production photos

Real production photos live in `public/photos/` and are referenced with paths such as:

```
/photos/IMG_1937.jpeg
/photos/IMG_1947.jpeg
/photos/IMG_1955.jpeg
/photos/IMG_2136.jpeg
```

If you replace photos, keep the paths/names the same or update the corresponding page code.

## Deploy

The project is compatible with Vercel and standard Next.js hosting.

For Vercel:

1. Import the GitHub repository.
2. Set the environment variables in the Vercel project settings.
3. Deploy.
4. Every push to the configured production branch can trigger a new deployment.

## Security

- Never put API keys in client-side code.
- Never commit `.env.local`.
- Use server-side API routes for secrets.
- Use separate development/production keys where possible.
- Review environment variables before sharing the repository.

## Status

The project is intended to be a downloadable, self-contained Next.js website. The GitHub repository is the canonical project source, while Vercel can be used as the hosted deployment.

© 2026 Echo Productions.
