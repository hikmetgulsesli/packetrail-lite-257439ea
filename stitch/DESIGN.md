---
name: PacketRail Lite
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#333b3b'
  surface-container-lowest: '#081010'
  surface-container-low: '#151d1e'
  surface-container: '#192122'
  surface-container-high: '#232b2c'
  surface-container-highest: '#2e3637'
  on-surface: '#dce4e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce4e4'
  inverse-on-surface: '#2a3232'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e3fdff'
  on-primary: '#00373a'
  primary-container: '#00f3ff'
  on-primary-container: '#006b71'
  inverse-primary: '#00696f'
  secondary: '#ffabf3'
  on-secondary: '#5b005b'
  secondary-container: '#fe00fe'
  on-secondary-container: '#500050'
  tertiary: '#e8ffe6'
  on-tertiary: '#003915'
  tertiary-container: '#2cfc7b'
  on-tertiary-container: '#007031'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#ffabf3'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#810081'
  tertiary-fixed: '#66ff8f'
  tertiary-fixed-dim: '#00e46b'
  on-tertiary-fixed: '#00210a'
  on-tertiary-fixed-variant: '#005322'
  background: '#0d1515'
  on-background: '#dce4e4'
  surface-variant: '#2e3637'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-base:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  score-xl:
    fontFamily: JetBrains Mono
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  panel-padding: 24px
---

## Brand & Style
The design system for this project embodies a high-velocity, neon-tech aesthetic tailored for competitive browser-based arcade gaming. It targets a demographic that appreciates technical precision blended with the visceral energy of synthwave and cyberpunk aesthetics.

The visual direction is **Electric Glassmorphism**. This style leverages deep, dark backgrounds to maximize the luminance of neon accents. UI elements appear as high-tech overlays—semi-transparent panels that feel like a "Heads-Up Display" (HUD) floating over the game world. The emotional response should be one of urgency, focus, and digital immersion, where every "packet" of information feels alive and kinetic.

## Colors
The palette is built on a foundation of **Deep Space Navy**, providing a high-contrast stage for the luminous accent colors. 

- **Neon Cyan (Primary):** Used for the primary "rails," interactive navigation, and critical path UI. It represents the flow of data.
- **Electric Magenta (Secondary):** Reserved for high-energy events, combos, and bonus multipliers. It signifies excitement and peak performance.
- **Lime Green (Success):** Used for "safe" zones, successful data delivery, and level-up indicators.
- **Pulsing Red (Error):** High-intensity warning color for data collisions, life loss, or system overloads.

Surface elements utilize a semi-transparent charcoal to maintain legibility while allowing the background motion and "glowing rails" to remain visible beneath the UI layers.

## Typography
The typography system uses a dual-concept approach to balance readability with a technical aesthetic.

- **Headlines & Display:** **Sora** provides a geometric, futuristic feel with wide apertures, perfect for high-impact game titles and level headers.
- **UI Labels & Body:** **Hanken Grotesk** is used for descriptions and settings for its modern, clean clarity.
- **Data & Metrics:** **JetBrains Mono** is the workhorse for scores, timers, and packet IDs. Its monospaced nature ensures that rapidly changing numbers don't cause layout shift and look like a real-time data stream.

Apply an outer glow (`drop-shadow`) to **Score-XL** text in the Primary color to simulate a luminous display tube effect.

## Layout & Spacing
This design system utilizes a **Fixed-Width HUD** model on desktop and a **Fluid Overlay** model on mobile. 

The layout relies on a 12-column grid for menus, while the in-game HUD uses "corner-anchored" positioning to keep the center of the screen clear for gameplay. Spacing is strictly based on a **4px increments**, ensuring all technical elements feel aligned and mathematically sound.

- **Desktop:** Elements are contained within a 1280px max-width "safe zone."
- **Mobile:** Elements reflow to vertical stacks with a minimum 16px side margin. The score stays pinned to the top-center.
- **Gutters:** Consistent 16px spacing between panel elements to maintain a sense of modular "blocks."

## Elevation & Depth
Depth is achieved through **Backdrop Blurs** and **Luminous Outlines** rather than traditional drop shadows.

1.  **Level 0 (Background):** Deep Space Navy (#0A0E17).
2.  **Level 1 (Panels):** Semi-transparent charcoal with a `20px` backdrop blur. Borders are `1px` solid at 20% opacity of the accent color.
3.  **Level 2 (Active/HUD):** These elements feature a `2px` solid neon border and a `0 0 10px` outer glow in the primary or secondary color.
4.  **Level 3 (Pop-ups):** High-contrast overlays with a darker backdrop dimming effect (60% black) to focus the player's attention.

## Shapes
The shape language is **Technical and Precise**. We use small corner radii (`4px` to `8px`) to avoid the UI feeling too soft or "toy-like."

- **Standard Elements:** `4px` (Soft) radius for a disciplined, military-grade hardware feel.
- **Large Panels:** `12px` (rounded-xl) for main menu containers to subtly distinguish them from game components.
- **Interactive Triggers:** Should use chamfered corners (45-degree clips) where possible via CSS `clip-path` to reinforce the "rail" and "packet" theme.

## Components
- **Buttons:** High-contrast, solid Cyan or Magenta fills with black text for primary actions. On hover, the button should gain a "flicker" animation and an expanded outer glow.
- **HUD Chips:** Small, monospaced labels used for "Multiplier" or "Packet Type." These feature a `1px` neon border and no fill.
- **Input Fields:** Dark background with a bottom-only Cyan border. The cursor should be a solid Cyan block, mimicking a terminal.
- **Progress Bars (Rails):** The "track" is a low-opacity navy line; the "progress" is a solid Neon Cyan bar with a "leading edge" glow that leaves a faint trail.
- **Cards/Panels:** Semi-transparent with a subtle `linear-gradient` border that transitions from Cyan to Magenta to suggest data movement.
- **Modals:** Use a heavy `32px` backdrop blur to completely isolate the game state behind the menu.