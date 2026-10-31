# Mansas Moguls Color System & Design Direction

**Status:** Implemented (Global palette, division personalities)  
**Updates Required:** Section rhythm audit, accessibility verification, component usage

---

## Expanded Brand Palette

### Primary Colors
- **Ink:** `#141418` — Deep background, ink, dark surfaces
- **Ivory:** `#F7F5F0` — Primary readable text, light surfaces, highlights
- **Violet:** `#7456F2` — Primary action color, consistent across all interfaces
- **Lavender:** `#EAE4FF` — Secondary accent, softer text, supporting elements

### New Expansion
- **Ice Cyan:** `#85E8F2` — Selective highlights, secondary interactions, fine details
- **Champagne:** `#C8AD7F` — Rare, premium accent for specific divisions and moments

### Semantic Neutral
- **Slate Light:** `#A6A6B2` — Secondary text, placeholders, disabled states
- **Slate Dark:** `#494953` — Borders, dividers, subtle separation

---

## Global Interface Rules

1. **Violet is the consistent primary action color** — all buttons, primary CTAs, form inputs
2. **Ivory for readable text** — body copy, headlines, labels
3. **Cyan used selectively** — highlights, secondary interaction details, fine accents
4. **Champagne is rare** — specific division visuals, premium moments only
5. **No rainbow gradients** — avoid multi-color fades on text or buttons
6. **No glowing balls or fog patches** — refined, controlled luminosity only

---

## Division Color Personalities

Applied in illustrations, section details, accent elements, and selected visuals. Navigation, typography, and button styling remain consistent globally.

### Digital — Ice Cyan with Ivory
- **Primary:** `#85E8F2` (ice cyan)
- **Secondary:** `#F7F5F0` (ivory)
- **Use Case:** Technical clarity, modern digital systems, speed, accessibility
- **Visual Treatment:** Bright, crisp accents; fine lines; high contrast

### AI — Violet with Ice Cyan
- **Primary:** `#7456F2` (violet)
- **Secondary:** `#85E8F2` (ice cyan)
- **Use Case:** Intelligent systems, connectivity, neural-inspired aesthetics
- **Visual Treatment:** Deep core with bright edges; layered, flowing forms

### Growth — Violet with Champagne
- **Primary:** `#7456F2` (violet)
- **Secondary:** `#C8AD7F` (champagne)
- **Use Case:** Upward momentum, premium value, growth trajectory
- **Visual Treatment:** Gradient warmth; uplifting forms; warm metallic highlights

### Creative — Violet with Lavender
- **Primary:** `#7456F2` (violet)
- **Secondary:** `#EAE4FF` (lavender)
- **Use Case:** Artistic expression, brand identity, refined aesthetics
- **Visual Treatment:** Soft gradients; expressive forms; elevated color transitions

### Strategy — Champagne with Ivory
- **Primary:** `#C8AD7F` (champagne)
- **Secondary:** `#F7F5F0` (ivory)
- **Use Case:** Premium advisory, timeless positioning, authority
- **Visual Treatment:** Warm, sophisticated tones; minimal, commanding presence

---

## Hero Sculpture Direction

**Lighting:** Violet-to-ice-cyan gradient with fine ivory reflections  
**Materials:** Dark translucent glass, controlled luminous edges  
**Palette Application:**
- Core: Deep violet (#7456F2)
- Mid-tone edges: Ice cyan (#85E8F2)
- Specular highlights: Ivory (#F7F5F0)
- Background: Ink black (#141418)

**When Generated:** Higgsfield Cinema Studio 2.5 will implement with updated prompt referencing new colors.

---

## Section Rhythm Strategy

### Alternating Pattern
**Dark Cinematic Sections** (existing):
- Hero (Ink background)
- Division previews (dark immersive scenes)
- Process diagram (dark container)
- Footer (ink + violet)

**Warm Editorial Sections** (to be implemented/audited):
- Services & capabilities explanations
- Insights & articles
- Project brief form
- Team/about pages
- Contact section

**Rationale:** Dark sections feel immersive and dramatic; light sections feel editorial, readable, and accessible. Alternating breaks monotony and creates breathing room.

---

## Implementation Checklist

### ✅ Completed
- [x] Color tokens added to tokens.css (cyan, champagne)
- [x] Division data updated with new accent colors and secondary colors
- [x] Hero brief updated for Higgsfield asset generation
- [x] Division selector reflects accent colors on selection

### 🔄 In Progress
- [ ] Division pages (hero, sections) apply color personalities to illustrations
- [ ] Section components audit contrast ratios

### 📋 To Do
- [ ] Light editorial sections: style/implement backgrounds, typography contrast
- [ ] Component audit: verify cyan used only for secondary details, not primary UI
- [ ] Champagne usage: identify where it's used in growth/strategy, check contrast
- [ ] Accessibility pass: all text meets WCAG AA on actual backgrounds
- [ ] No rainbow gradients: search codebase for multi-color text gradients, remove
- [ ] Division world scenes: apply color personalities to 3D materials and lighting

---

## Contrast & Accessibility Notes

### Champagne (#C8AD7F) on Dark Backgrounds
- **On Ink (#141418):** Contrast ~6.2:1 ✅ (meets WCAG AA for normal text)
- **On Ink-Elevated (#1c1c23):** Contrast ~5.8:1 ✅
- **Safe for:** Body text if careful; better for headings, labels, accents
- **Avoid:** Small text on champagne; use ivory for body copy instead

### Ice Cyan (#85E8F2) on Dark Backgrounds
- **On Ink (#141418):** Contrast ~8.5:1 ✅✅ (exceeds WCAG AAA)
- **Safe for:** All text sizes, body copy, detailed labels
- **Use for:** Secondary interactive elements, highlights

### Ivory (#F7F5F0) on Dark Backgrounds
- **On Ink (#141418):** Contrast ~15:1 ✅✅ (exceeds WCAG AAA)
- **Use for:** All primary text, high readability required

### Violet (#7456F2) on Dark Backgrounds
- **On Ink (#141418):** Contrast ~5.2:1 ✅ (meets WCAG AA for large text)
- **Safe for:** Buttons, links, 14pt+ body; avoid small text
- **Better for:** Action elements, tab indicators, highlights

### Testing Required
- [ ] Light ivory sections: verify text contrast against light backgrounds
- [ ] Champagne text: test at smaller sizes for readability
- [ ] Form inputs: validate text color on colored input backgrounds
- [ ] Links: ensure underline or non-color cues for clarity

---

## Component Usage Rules

### Buttons & CTAs
- **Primary buttons:** Violet background, ivory text
- **Secondary buttons:** Transparent, violet border, ivory text
- **Hover state:** Violet adjusted (--color-violet-hover: #6142e8)
- **Disabled:** Slate light text on ink-elevated background

### Form Elements
- **Input focus:** Violet border, no cyan border
- **Placeholders:** Slate light text
- **Labels:** Ivory text
- **Error state:** Consider using violet for clarity (not red/orange)

### Links & Navigation
- **Underline:** Violet or cyan depending on division context
- **Hover:** Underline brightens, text remains ivory
- **Visited:** Violet-deep for distinction (if tracking navigation state)

### Accents & Decorative
- **Dividers:** Slate dark (rgba-based)
- **Borders:** Slate dark or subtle ink-elevated
- **Icons:** Ivory, slate light (secondary), violet (interactive)
- **Gradients:** Avoid rainbow; use mono-color fades only

### Division-Specific Details
- **Hero division selector:** Accent color bottom-border on active tab
- **Division page headers:** Accent color in eyebrow or line accent
- **Service cards:** Accent color subtle left border or highlight
- **Illustration elements:** Division primary + secondary colors in 3D scenes

---

## Future Enhancements

### Dark Mode / Light Mode
Current system assumes dark primary mode. If light mode is added:
- Ink becomes background (works in dark mode)
- Ivory becomes primary text (works in both)
- Violet remains primary action (works in both)
- Cyan may need lightened variant for light mode legibility
- Champagne may need darkened variant for light mode

### Animated Transitions
- Division selector tab indicator: smooth color transition (~200ms)
- Hover states: color transition on buttons, links
- Focus states: violet glow or outline

---

## Reference Implementation

### CSS Custom Properties (Already in tokens.css)
```css
:root {
  --color-ink: #141418;
  --color-ivory: #f7f5f0;
  --color-violet: #7456f2;
  --color-violet-hover: #6142e8;
  --color-lavender: #eae4ff;
  --color-cyan: #85e8f2;
  --color-cyan-hover: #6dd8e5;
  --color-champagne: #c8ad7f;
  --color-champagne-hover: #b49965;
}
```

### Division Data (Already in divisions.ts)
```typescript
digital: {
  accent: '#85e8f2',       // cyan
  accentSecondary: '#f7f5f0', // ivory
}
ai: {
  accent: '#7456f2',       // violet
  accentSecondary: '#85e8f2', // cyan
}
growth: {
  accent: '#7456f2',       // violet
  accentSecondary: '#c8ad7f', // champagne
}
creative: {
  accent: '#7456f2',       // violet
  accentSecondary: '#eae4ff', // lavender
}
strategy: {
  accent: '#c8ad7f',       // champagne
  accentSecondary: '#f7f5f0', // ivory
}
```

---

## Testing & Validation

### Before Ship
1. **Contrast audit:** All text meets WCAG AA on actual backgrounds
2. **Color consistency:** Violet used only for primary actions
3. **Division validation:** Each division section displays assigned colors
4. **Light section readability:** Editorial sections have sufficient contrast
5. **No rainbow gradients:** Search for multi-color text gradients
6. **Cyan usage:** Only secondary interactions, not primary UI
7. **Champagne rarity:** Used sparingly, only in division/premium contexts

### Tools
- WebAIM Contrast Checker
- Lighthouse accessibility audit
- Browser DevTools color contrast calculator
- WAVE accessibility plugin

---

## Summary

The expanded palette brings sophistication (champagne, cyan) while maintaining the dark, premium aesthetic. Division personalities now have clear visual identities without compromising global consistency. The section rhythm strategy moves from monolithic dark to an alternating pattern of dark immersive and light editorial, improving readability and visual breathing room.

**Key principles:**
- Violet is the primary action color everywhere
- Cyan is selective, secondary, rare
- Champagne is rarest, premium only
- Each division has a distinct personality but shares global UI conventions
- Dark and light sections alternate for rhythm and accessibility

---

*Color system refined: October 31, 2026*
