# THARA Design System

Everything lives in `tailwind.config.js` (tokens) and `css/input.css` (ready components).
**Rule: don't write custom colors, sizes or pixel values. Use what is listed here.**

## 1. Colors

| Token | Hex | Use for |
|---|---|---|
| `forest` | `#1f3a2d` | Navbar, footer, headings, main brand color |
| `forest-light` | `#2f5442` | Hover on forest |
| `forest-dark` | `#142619` | Footer / very dark areas |
| `gold` | `#b88a2e` | Main call-to-action buttons, accents |
| `gold-light` | `#e0c27a` | Taglines on dark backgrounds |
| `gold-dark` | `#8a6414` | Hover on gold |
| `cream` | `#efe6d0` | Page background |
| `cream-card` | `#f7f1e1` | Card background |
| `cream-line` | `#d9ccab` | Borders and dividers |
| `ink` | `#26231c` | Main text |
| `ink-soft` | `#6b6454` | Secondary / muted text |
| `success` | `#3d7a4f` | Success messages |
| `danger` | `#a8402f` | Errors, delete |

Usage: `bg-forest`, `text-gold`, `border-cream-line` ...
Never use plain Tailwind colors like `bg-blue-500` or `text-gray-600`.

## 2. Fonts

| Role | Font | Class |
|---|---|---|
| Headings, logo | Cormorant Garamond | `font-display` |
| Body, buttons, forms | Inter | `font-body` (already on `<body>`) |

| Size | Class | Value |
|---|---|---|
| Page title | `h1` (component) | 56px |
| Section title | `h2` (component) | 36px |
| Card title | `h3` (component) | 24px |
| Body | default | 16px |
| Small | `text-small` | 14px |

## 3. Spacing (use only these)

| Use | Class |
|---|---|
| Between small items | `gap-2`, `gap-4` |
| Inside cards | `p-6` |
| Between cards in a grid | `gap-6` |
| Space under a title | `mb-4` or `mb-6` |
| Page section top/bottom | `section` (component) |
| Page side padding + max width | `container-page` (component) |

Spacing scale: 4 - 8 - 16 - 24 - 32 - 48 - 80 px (Tailwind `1, 2, 4, 6, 8, 12, 20`). Avoid other values.

## 4. Shapes and shadows
- Buttons: `rounded-btn` (8px)
- Cards: `rounded-card` (12px) + `shadow-card`
- Max page width: `max-w-page` (1152px) - already inside `container-page`

## 5. Ready components (in `css/input.css`)

| Class | What it gives you |
|---|---|
| `container-page` | Centered page width + side padding |
| `section` | Vertical spacing for a page section |
| `h1` `h2` `h3` | Headings |
| `text-muted` | Secondary text |
| `btn-primary` | Gold button (main action) |
| `btn-secondary` | Green button |
| `btn-outline` | Outlined button |
| `card` | Card box |

Example:
```html
<div class="card">
  <h3 class="h3 mb-2">Jerusalem</h3>
  <p class="text-muted mb-4">Short description.</p>
  <a href="#" class="btn-primary">Explore</a>
</div>
```

## 6. Responsive
Mobile first. Write the mobile style, then add `md:` (tablet+) and `lg:` (desktop). Example: `grid grid-cols-1 md:grid-cols-3 gap-6`.

## 7. Do / Don't
- Do copy from `styleguide.html`.
- Do add a new reusable style to `css/input.css` and tell the team.
- Don't write inline `style="..."` or custom hex colors.
- Don't add new fonts.
- Don't change `tailwind.config.js` without telling the group.
