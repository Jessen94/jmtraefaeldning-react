---
name: Arboreal Excellence
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#42493e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#72796e'
  outline-variant: '#c2c9bb'
  surface-tint: '#3b6934'
  primary: '#154212'
  on-primary: '#ffffff'
  primary-container: '#2d5a27'
  on-primary-container: '#9dd090'
  inverse-primary: '#a1d494'
  secondary: '#835425'
  on-secondary: '#ffffff'
  secondary-container: '#ffbf87'
  on-secondary-container: '#7a4b1e'
  tertiary: '#60233e'
  on-tertiary: '#ffffff'
  tertiary-container: '#7c3a55'
  on-tertiary-container: '#ffaac8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcf0ae'
  primary-fixed-dim: '#a1d494'
  on-primary-fixed: '#002201'
  on-primary-fixed-variant: '#23501e'
  secondary-fixed: '#ffdcc1'
  secondary-fixed-dim: '#f9ba82'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#683d0f'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cc'
  on-tertiary-fixed: '#3b0520'
  on-tertiary-fixed-variant: '#71314c'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-margin: 24px
  grid-gutter: 24px
  container-max-width: 1280px
---

## Brand & Style
The design system is rooted in the concepts of **Reliability, Stewardship, and Precision**. It caters to homeowners and commercial property managers who require professional arboricultural services. The aesthetic avoids the "rugged" clichés of hardware stores in favor of a **Corporate Modern** approach that emphasizes expertise and safety. 

The visual style utilizes generous whitespace and structured layouts to evoke a sense of calm and order. It blends high-contrast typography with a naturalistic color palette to position the service as a premium, expert solution rather than a general laborer.

## Colors
The palette is inspired by the verticality of a forest. **Deep Forest Green** serves as the primary anchor, used for headers, primary buttons, and iconography to establish authority. **Warm Wood Brown** provides an organic counterpoint, used for accents, dividers, and secondary interactive elements. 

**Bright Leaf Green** is reserved exclusively for high-priority calls to action (CTAs) and success states, ensuring "Get a Quote" buttons remain highly visible against the darker primary tones. The background is a crisp **Off-white**, providing a clinical cleanliness that reinforces the "expert" brand positioning.

## Typography
This design system employs a pairing of **Montserrat** and **Work Sans**. Montserrat’s geometric sturdiness conveys the physical strength required for tree care, while its modern construction keeps the brand feeling contemporary. It should be used for all headings with tight letter-spacing to create a "blocky," dependable appearance.

**Work Sans** is used for body copy and interface labels. Its optimized legibility ensures that service descriptions and safety information are easily digestible. Use the uppercase `label-md` style for trust badges and category tags to differentiate them from narrative text.

## Layout & Spacing
The layout follows a **12-column fixed grid** on desktop, centering content to maintain a professional, editorial feel. Spacing is governed by a strict 8px linear scale. 

- **Section Vertical Spacing:** Use large 120px gaps between major sections on desktop to allow the high-quality imagery to "breathe."
- **Content Blocks:** Group related items (like service icons and descriptions) using 24px spacing.
- **Mobile Reflow:** Transition to a single-column layout for service cards, maintaining 24px side margins to ensure the interface feels grounded and accessible.

## Elevation & Depth
To maintain a high-end feel, the design system avoids heavy drop shadows. Instead, it utilizes **Ambient Shadows** and **Tonal Layering**.

- **Cards:** Use a very soft, diffused shadow (15% opacity of the Primary Green) to give the impression that elements are resting gently on the surface.
- **Navigation:** The header should use a subtle border-bottom (1px, 10% Primary Green) rather than a shadow to maintain a flat, clean profile.
- **Depth through Imagery:** Depth is primarily created by the contrast between crisp vector UI elements and high-resolution, full-bleed photography of nature and active tree-work.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the "edge" off the industrial nature of the business, making the brand feel more approachable and modern without losing the professional structure of a grid-based design. 

Large image containers and "hero" sections should maintain the `rounded-lg` (0.5rem) setting to create a framing effect that feels intentional and high-quality.

## Components

### Buttons
- **Primary (Accent):** Filled with Bright Leaf Green (#4CAF50). Used exclusively for "Get a Quote" and "Book Now." Text should be bold and high-contrast.
- **Secondary:** Outlined in Deep Forest Green (#2D5A27). Used for "Learn More" or "View Gallery."

### Cards (Service & Testimonial)
Cards should have a white background, the `rounded-lg` corner radius, and a 1px stroke in a very light grey (#EDEDED). Service cards must feature a high-quality thumbnail image at the top with a subtle 4px internal margin from the card edge.

### Input Fields
Forms should be clean and structured. Use a 2px bottom-border focus state in Wood Brown (#8B5A2B) to indicate active fields. Labels should always be visible above the input, never hidden as placeholders.

### Trust Badges & Testimonials
Trust badges (ISO certifications, insurance icons) should be rendered in monochrome Forest Green to ensure they feel like part of the professional system rather than cluttered advertisements. Testimonials should include a small circular avatar of the client to add a human element to the technical service.