# Easy Clean ACK

**Nantucket's Finest Mobile Auto Detailers** — Next.js website ready for GitHub + Vercel deployment.

## 🚀 Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 📦 Deploy to Vercel (from GitHub)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/easycleanack.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) → New Project
   - Import your GitHub repository
   - Vercel auto-detects Next.js — just click **Deploy**
   - Your site will be live at `https://easycleanack.vercel.app` (or connect your custom domain)

3. **Connect custom domain** (easycleanack.com)
   - In Vercel → Project → Settings → Domains → Add `easycleanack.com`
   - Update DNS at your registrar to point to Vercel's nameservers

## 📬 Setting Up the Contact Form

The contact form is currently client-side only. To receive emails from submissions:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your endpoint URL (e.g. `https://formspree.io/f/XXXXXXXX`)
3. In `pages/contact.js`, update the `handleSubmit` function:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch('https://formspree.io/f/XXXXXXXX', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  if (res.ok) setSubmitted(true);
};
```

## 📁 Project Structure

```
easycleanack/
├── components/
│   └── Layout.js        # Nav + Footer
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js         # Home page
│   ├── services.js      # Services page
│   └── contact.js       # Contact page
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   ├── Services.module.css
│   └── Contact.module.css
├── next.config.js
└── package.json
```

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS Modules + Google Fonts
- **Deployment**: Vercel
- **Images**: Wix CDN (can be replaced with your own)
