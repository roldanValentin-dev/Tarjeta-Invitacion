---
name: Luminous Celebration
colors:
  surface: '#f8f9ff'
  surface-dim: '#d1dbec'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dfe9fa'
  surface-container-highest: '#d9e3f4'
  on-surface: '#121c28'
  on-surface-variant: '#544249'
  inverse-surface: '#27313e'
  inverse-on-surface: '#eaf1ff'
  outline: '#87717a'
  outline-variant: '#dac0c9'
  surface-tint: '#a43073'
  primary: '#a43073'
  on-primary: '#ffffff'
  primary-container: '#f472b6'
  on-primary-container: '#6d0047'
  inverse-primary: '#ffafd3'
  secondary: '#8127cf'
  on-secondary: '#ffffff'
  secondary-container: '#9c48ea'
  on-secondary-container: '#fffbff'
  tertiary: '#795900'
  on-tertiary: '#ffffff'
  tertiary-container: '#ca9700'
  on-tertiary-container: '#473300'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e7'
  primary-fixed-dim: '#ffafd3'
  on-primary-fixed: '#3d0026'
  on-primary-fixed-variant: '#85145a'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f8f9ff'
  on-background: '#121c28'
  surface-variant: '#d9e3f4'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 60px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 42px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-padding: 24px
  gutter: 16px
---

## Brand & Style
This design system captures the essence of high-end festivities—merging the sophistication of a luxury gala with the vibrant energy of a modern celebration. It is designed for premium event planning, social storytelling, and boutique lifestyle platforms. 

The aesthetic is a fusion of **Glassmorphism** and **High-Contrast Boldness**. We utilize translucent, shimmering layers to create a "sparkling" effect, layered over vibrant, floral-inspired backdrops. The UI should evoke a sense of magic, joy, and exclusivity, utilizing whitespace to allow decorative floral patterns and glittery accents to breathe without cluttering the functional interface.

## Colors
The palette is rooted in deep, vibrant florality. 
- **Primary Pink (#f472b6):** Used for main actions and highlighting key celebratory moments.
- **Vibrant Lilac (#a855f7):** Provides depth and a sense of "royal" festivity, used for secondary interactions and gradient accents.
- **Sparkle Gold (#fbbf24):** An accent color used sparingly for "glitter" highlights and star ratings.
- **Backgrounds:** A wash of soft lavender and pink gradients replaces flat whites to maintain the festive atmosphere throughout the entire experience.

## Typography
The typography balances classic elegance with modern readability. **Playfair Display** serves as the authoritative, celebratory voice—use Italic styles for subheadings to add a romantic, fluid feel. **Plus Jakarta Sans** provides a clean, approachable counterpoint for functional text, ensuring the UI remains accessible and efficient despite the decorative surroundings.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop (12-column, 1200px max-width) to create a centered, "gallery-like" experience. For mobile, it transitions to a fluid, single-column layout with generous side margins (24px).

Spacing is intentionally airy. Use larger vertical gaps between sections to prevent the vibrant colors and patterns from feeling overwhelming. Elements should feel like they are "floating" within the festive environment.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Tinted Shadows**. 
1.  **The Base:** Soft lavender/pink gradient background.
2.  **The Canvas:** Semi-transparent white surfaces (opacity 70-80%) with a 12px backdrop blur.
3.  **Shadows:** Instead of grey, use a low-opacity Lilac (#a855f7) shadow for floating elements (cards, menus) to maintain color harmony.
4.  **Accents:** Subtle inner glows (1px, white, 40% opacity) on buttons and containers simulate a "polished glass" or "shimmering" edge.

## Shapes
Shapes are soft and welcoming. A standard radius of **0.5rem (8px)** is used for most containers and input fields. For high-energy components like buttons and chips, use **Pill-shapes (rounded-full)** to emphasize the playful, festive nature of the design.

## Components
- **Buttons:** Primary buttons use a linear gradient from Pink to Lilac with a subtle "sparkle" overlay (a faint noise texture). Hover states should increase the brightness and expand the shadow.
- **Cards:** Incorporate a subtle floral watermark or corner motif in the background of cards. Use the Glassmorphism style (blur + transparency) for the card body.
- **Chips:** Small, pill-shaped tags with a high-contrast border but a soft, translucent fill.
- **Input Fields:** Use a soft lilac border that glows when focused. Backgrounds should be slightly opaque white to stand out against the patterned page background.
- **Lists:** Use custom floral icons or "sparkle" bullets instead of standard dots.
- **Modals:** Deep backdrop blur (20px) to isolate the user's focus on the festive content, with a prominent "close" icon in a gold accent.