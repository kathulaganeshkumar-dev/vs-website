# Varun Systems website (`vs-website`)

Frontend-only corporate website for Varun Systems. It includes a responsive homepage, company profile, technology expertise directory with individual detail pages, searchable product catalogue, image-led carousels, industries page and contact form.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
pnpm install
pnpm dev
```

Vite prints the local URL when the development server starts.

Create a production build with:

```bash
pnpm build
```

The build output is written to `dist/`. Since this is a client-routed SPA, a deployment host should rewrite unknown page paths to `index.html`.

## Enquiry form

The form validates required fields in the browser and prepares a prefilled message for the visitor's email application. The visitor must choose to open and send it. This site does not send, store or claim delivery of enquiries. Connect a form service or backend endpoint in `src/components/EnquiryForm.tsx` when one is available.

## Content and assets

Service categories, product categories and industries are stored in `src/data/`. The current address and email use the confirmed project details and newer company profile. The older profile's address and Outlook email are not used.

The official logo and selected photos are extracted from the supplied company profiles and optimized for the site. The homepage background video is a silent WebM montage made from those relevant corporate photos, with an accessible play/pause control and a static poster image.