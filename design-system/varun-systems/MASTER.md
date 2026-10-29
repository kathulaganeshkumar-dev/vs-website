# Varun Systems — Design System

**Product:** Corporate website for an IT infrastructure, technology products and enterprise services company in Hyderabad.
**Source of truth:** Company name, logo, service scope, history and industries come from the supplied company profiles. Use the newer profile and the confirmed project brief for current contact information.

## Visual direction

Use a calm, light corporate foundation with the reference site's generous whitespace and quiet geometric motifs. Keep the orange and purple from the official Varun Systems logo. Use thin rules, restrained hexagonal shapes and network-like lines as supporting details. The site should feel established and readable for procurement, IT and operations teams.

Do not copy Redington's logo, green palette, text or claims. Do not use the dark HexaCore template's fabricated client logos, certifications or statistics. Avoid excessive gradients, glass effects, parallax, autoplay and decorative animation.

## Color tokens

| Role | Value | CSS token |
|---|---|---|
| Brand purple | #76397F | `--color-brand` |
| Deep purple | #4E2B58 | `--color-brand-deep` |
| Brand orange | #D9652C | `--color-accent` |
| Ink | #211E25 | `--color-ink` |
| Body copy | #625D66 | `--color-muted` |
| Warm paper | #FAF8F5 | `--color-paper` |
| White surface | #FFFFFF | `--color-surface` |
| Soft lavender | #F2EDF3 | `--color-tint` |
| Border | #E7E1E8 | `--color-border` |
| Focus ring | #76397F | `--color-focus` |

Use deep purple for primary buttons and links that sit on light backgrounds. Reserve orange for small highlights, icon details and section markers; do not place small white text on a bright orange button.

## Type and layout

- Headings: Lexend, 500–700.
- Body: Source Sans 3, 400–600; 16px minimum on mobile.
- Use a 4/8px spacing rhythm, roomy section breaks and a centered max-width near 1200px.
- Keep long-form text measure between 60–75 characters on desktop.
- Use square-to-softly-rounded cards (6–10px radius), fine borders and light shadows.
- Keep product browsing and service summaries easy to scan.

## Interaction and accessibility

- Use semantic links for navigation and buttons for state changes.
- Keep keyboard focus visible and maintain at least 44px control heights.
- Give icon-only controls accessible names; hide decorative icons from assistive technology.
- Use visible labels for every form field and show browser-side validation feedback.
- Keep navigation and filter controls operable by keyboard and touch.
- Respect `prefers-reduced-motion`; use short opacity/transform transitions only.
- Keep text contrast at WCAG AA levels and never convey state by color alone.
- Ensure no horizontal overflow at 375px, 768px, 1024px and 1440px viewports.

## Page structure

Home: hero and enquiry paths → company introduction → all service categories → catalogue preview → industries → supported capabilities → contact CTA.

Shared site shell: compact contact strip, branded navigation, footer with confirmed contacts, keyboard-accessible mobile menu.

Product catalogue: category filters, text search, realistic category descriptions and enquiry actions. No prices, stock status, order flow or invented models.

Enquiries: validate in the browser, then offer a clearly labelled mailto link. Never claim a form was delivered; do not persist submissions in the browser.

## Content constraints

- Preserve the official logo's proportions and colors.
- Use the confirmed address, `info@varunsystems.in`, and supplied phone numbers consistently.
- Do not repeat the older Bharath Nagar address or Outlook email from the earlier profile.
- Do not invent customers, partnership claims, certifications, guarantees, service times, prices or company metrics.
- Link every service category to a detail view and every catalogue item to a contextual enquiry.
