# PHOTOS.md — already downloaded

Copy the `photos/` folder into the Next app `public/photos/`.
Use a plain `<img src="/photos/…">`. Never `/_next/image`. Never Unsplash.
Hero file (`(hero)` below) fills the first viewport: min-height 80vh, object-fit cover.
className="hero" after pasting THEME.css, or inline minHeight + objectFit. Not a 200px card.
Band files (`(band)`) are photograph-as-material, one full-bleed band each:
min-height 70vh or >=420px, width 100%, object-fit cover. Not a thumbnail card.

Hero is `/photos/hero-0.jpg` (locked raster), not the logo SVG `/photos/logo-0.svg`.

- `/photos/hero-0.jpg` (hero) ← https://tmg.agency/images/earth-night-lights.jpg
- `/photos/logo-0.svg` (logo) ← https://tmg.agency/tmglogo.svg
- `/photos/logo-1.png` (logo) ← https://tmg.agency/_next/image?url=%2Flogos%2Fforcepoint.png&w=640&q=75
- `/photos/logo-2.png` (logo) ← https://tmg.agency/_next/image?url=%2Flogos%2Fjecobra-aviation.png&w=640&q=75
- `/photos/logo-3.png` (logo) ← https://tmg.agency/_next/image?url=%2Flogos%2Fauntie-annes.png&w=640&q=75
- `/photos/logo-4.png` (logo) ← https://tmg.agency/_next/image?url=%2Flogos%2Fqualico.png&w=640&q=75
- `/photos/logo-5.png` (logo) ← https://tmg.agency/_next/image?url=%2Flogos%2Fnovak-capital.png&w=640&q=75
- `/photos/logo-6.png` (logo) ← https://tmg.agency/_next/image?url=%2Flogos%2Fadvanced-medical-trials.png&w=640&q=75
