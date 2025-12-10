# Dynamic Color Theming System

Your CSS now supports a powerful, flexible color system that lets you change an entire page's personality by overriding a single accent color variable.

## How It Works

### The Core System

The color system is built on **CSS custom properties (variables)** with a hierarchy:

1. **`--accent-base`** - The primary color that drives the entire theme
2. **Accent Shades** - Dark, medium, light, and lightest versions of your accent
   - `--accent-darkest`
   - `--accent-dark`
   - `--accent-light`
   - `--accent-lightest`
3. **Color-Mixed Neutrals** - Subtle tints of your accent mixed into neutral colors
   - `--color-bg-tinted` (neutral background with accent flavor)
   - `--color-border-tinted` (neutral border with accent flavor)
   - And others for a cohesive look

### Default Theme (Mustard/Gold)

In `src/styles/variables.css`:
```css
:root {
  --accent-base: #e6b800;           /* Mustard yellow */
  --accent-darkest: #a67d00;
  --accent-dark: #cc9900;
  --accent-light: #f5d966;
  --accent-lightest: #fef3c7;
}
```

## Creating Custom Themes

### Method 1: Class-Based Theming (Recommended)

Add a theme file to `src/styles/themes/` and define your accent colors:

```css
/* src/styles/themes/seafood.css */
.theme-seafood {
  --accent-base: #0ea5e9;           /* Sky blue */
  --accent-darkest: #0369a1;
  --accent-dark: #0284c7;
  --accent-light: #7dd3fc;
  --accent-lightest: #cffafe;
}
```

Then link it in your HTML **after main.css**:

```html
<head>
  <link rel="stylesheet" href="/styles/main.css">
  <link rel="stylesheet" href="/styles/themes/seafood.css">
</head>

<body class="theme-seafood">
  <!-- Entire page now uses seafood theme -->
</body>
```

### Method 2: Inline Style Override

For quick testing or single-element theming:

```html
<div style="--accent-base: #ef4444; --accent-darkest: #7f1d1d; ...">
  <!-- Just this element uses a red theme -->
</div>
```

### Method 3: Per-Restaurant Themes

You could even give each restaurant its own theme in `src/_includes/layouts/menu.njk`:

```html
<body class="page-menu" style="--accent-base: {{ restaurant.accentColor | default('#e6b800') }}">
  <!-- Each restaurant can have its own accent color from CMS -->
</body>
```

(First, add an `accentColor` field to your Decap CMS config for restaurants)

## Pre-Built Themes

Six example themes are in `src/styles/themes/default.css`:

- **Seafood** - Cool blues (`#0ea5e9`)
- **Spicy** - Vibrant reds (`#ef4444`)
- **Green** - Fresh greens (`#22c55e`)
- **Purple** - Elegant purples (`#a855f7`)
- **Rose** - Romantic rose (`#f43f5e`)
- **Coral** - Warm coral (`#ff6b6b`)

Copy any of these to create your own theme file.

## What Changes When You Override Accent

When you change `--accent-base`, all of these automatically update:

- ✅ Button/pill backgrounds on hover
- ✅ Card titles
- ✅ Menu section headers and borders
- ✅ Accent highlights throughout the site
- ✅ Shadow colors (gain the accent's personality)
- ✅ Background and border tints (subtle accent flavor)

Everything stays perfectly coordinated without touching any other CSS.

## Browser Support

- **Modern Browsers** - Full support for `color-mix()` (Chrome 111+, Safari 16.4+, Firefox 113+)
- **Fallback** - Browsers that don't support `color-mix()` use pre-calculated fallback colors in `@supports` rule

If you need to support older browsers more extensively, let me know and I can provide pre-calculated alternatives for all the color-mix() values.

## Customizing Accent Shades

The pre-defined shades work well for most colors, but if you create a custom theme and the shades don't feel right for your chosen accent, you can override them individually:

```css
.theme-custom {
  --accent-base: #some-color;
  --accent-darkest: #custom-darkest;
  --accent-dark: #custom-dark;
  --accent-light: #custom-light;
  --accent-lightest: #custom-lightest;
}
```

Use a tool like [colourco.de](https://colourco.de/) or Adobe Color to generate harmonious shade variations.

## Next Steps

1. Link `src/styles/themes/default.css` in your HTML to enable theme options
2. Or create a new theme file for specific pages
3. Add `accentColor` field to Decap CMS config to let editors set per-restaurant colors
4. Test themes by changing the `--accent-base` value and watching the entire site adapt
