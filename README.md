# Echo Productions

Professional live production, AV, and technical support website.

## What is included

- Marketing website for Echo Productions
- Services, pricing, portfolio, capabilities, resources, and about pages
- Project quote request UI
- Contact page
- Echo Tech Assist — a production + IT technical-help feature
- Responsive dark production-focused design
- SEO metadata

## Echo Tech Assist

Echo Tech Assist is intentionally limited to production and IT topics such as:

- Live audio and mixing
- Yamaha consoles, Dante, Waves/SuperRack
- Video and graphics
- Lighting and DMX
- Streaming and OBS
- Networking and production networks
- Windows, macOS, Linux, hardware, and software troubleshooting

The assistant is a feature of the Echo Productions website, not the purpose of the entire site.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production launch checklist

1. Connect the quote/contact forms to a real email or form backend.
2. Add the official Echo Productions logo and real project photos.
3. Add real social links.
4. Configure the production domain.
5. Deploy to Vercel or another Next.js host.
6. Replace demo assistant responses with a production AI provider when ready.
7. Add analytics only after choosing the desired privacy/analytics setup.

## Project structure

- `app/page.tsx` — homepage
- `app/services` — services
- `app/portfolio` — portfolio
- `app/capabilities` — technical capabilities
- `app/resources` — production resources
- `app/pricing` — pricing
- `app/quote` — quote request
- `app/contact` — contact
- `app/help` — Echo Tech Assist
- `app/api/help` — technical-help API
