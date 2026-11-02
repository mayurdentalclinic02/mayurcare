# Mayur Dental Care website

A React and Vite website for Mayur Dental Care in Vikhroli East, Mumbai.

## Local development

Install the locked dependencies and start the development server:

```sh
npm ci
npm run dev
```

Run the production build and linter with `npm run build` and `npm run lint`.

## SEO

The page title, description, canonical URL, social metadata, and Dentist structured data are in `index.html` so crawlers can see them in the initial response. `public/robots.txt` and `public/sitemap.xml` advertise the canonical site URL.

## Security and deployment

There is no application server or database in this project. The contact form opens a prefilled WhatsApp message; it does not store or submit form data to this website. React escapes rendered text, and the form message is URL-encoded before it is sent to WhatsApp.

`public/_headers` provides baseline security response headers for static hosting providers that support the `_headers` convention, including Netlify and Cloudflare Pages. Other hosts must be configured to return equivalent HTTP headers; this file alone does not enforce headers on arbitrary hosting. The Content Security Policy permits the Google Fonts and Maps embeds used by the site.
