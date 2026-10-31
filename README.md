# XECATO website

Marketing site for XECATO LLC, a UAE-based architectural, façade and landscape lighting company.
Built with Next.js 16, React 19, Tailwind CSS 4 and Framer Motion.

## Pages

| Route        | Content                                                      |
| ------------ | ------------------------------------------------------------ |
| `/`          | Hero, three disciplines, selected projects, numbers, partners |
| `/solutions` | All eleven lighting solutions                                 |
| `/projects`  | Project grid with category filters                            |
| `/about`     | Company profile, process, numbers, partners, clients          |
| `/contact`   | Enquiry form, office address, phone, email, WhatsApp          |

## Editing content

All copy lives in `src/content/site.ts`. Images are in `public/images/`, brand assets in
`public/brand/`, partner logos in `public/partners/`.

Project cards marked `placeholder: true` show a "Placeholder image" tag until real
photography is supplied.

An Arabic version only needs a second dictionary of the same shape with `locale.dir` set
to `"rtl"`; every layout already uses logical (start/end) spacing.

## Development

```bash
npm install
npm run dev
```

## Deployment (Hostinger, Node.js)

- Node 20 or newer
- Install: `npm install`
- Build: `npm run build`
- Start: `npm start`

The contact form currently confirms locally only; wire `onSubmit` in
`src/components/Contact.tsx` to a route handler or mail service before relying on it.
