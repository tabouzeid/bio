# Design System Documentation

This design system provides a centralized collection of reusable components, animations, and design tokens to ensure consistency across the application.

## 📁 Structure

```
design-system/
├── animations/
│   └── presets.ts          # Framer Motion animation presets
├── components/
│   ├── Button.tsx          # Button component with variants
│   └── NavLink.tsx         # Navigation link component
├── constants/
│   └── tokens.ts           # Design tokens (colors, spacing, typography)
├── index.ts                # Main exports
└── README.md               # This file
```

## 🎨 Design Tokens

### Colors

```typescript
import { tokens } from '@/design-system';

// Text colors
tokens.colors.text.primary      // text-gray-900
tokens.colors.text.secondary    // text-gray-800
tokens.colors.text.tertiary     // text-gray-600

// Background colors
tokens.colors.bg.primary        // bg-primary-light
tokens.colors.bg.white          // bg-white

// Interactive states
tokens.colors.interactive.default   // text-gray-800
tokens.colors.interactive.hover     // hover:text-gray-600
```

### Spacing

```typescript
// Margin bottom
tokens.spacing.mb.small                    // mb-4
tokens.spacing.mb.responsive.small         // mb-4 md:mb-6

// Section spacing
tokens.spacing.section.y                   // py-section-y
tokens.spacing.section.yLarge              // py-section-y-lg

// Gap (flexbox/grid)
tokens.spacing.gap.responsive.small        // gap-4 sm:gap-6
```

### Typography

```typescript
tokens.typography.hero              // text-hero font-cursive
tokens.typography.display           // text-display font-bold
tokens.typography.sectionTitle      // text-section-title font-medium
tokens.typography.bodyLarge         // text-body-lg
```

### Transitions

```typescript
tokens.transitions.colors           // transition-colors duration-200
tokens.transitions.all             // transition-all duration-200
```

### Layout

```typescript
tokens.layout.container.xl          // max-w-7xl
tokens.layout.center               // mx-auto
tokens.layout.flex.center          // flex items-center justify-center
```

## 🎬 Animation Presets

### Page Animations

```typescript
import { animations } from '@/design-system';

// Page entry fade
<motion.div {...animations.pageEntry}>
  {/* content */}
</motion.div>

// Fade up animation
<motion.h1 {...animations.fadeUp}>
  Heading
</motion.h1>

// Fade in view (scroll-triggered)
<motion.section {...animations.fadeInView}>
  {/* content */}
</motion.section>
```

### Interactive Animations

```typescript
// Navigation link
<motion.div {...animations.navLink}>
  <Link to="/">Home</Link>
</motion.div>

// Card hover
<motion.div {...animations.cardHover}>
  {/* card content */}
</motion.div>

// Icon button
<motion.button {...animations.iconButton}>
  <Icon />
</motion.button>
```

### Custom Animations

```typescript
// Individual hover/tap scales
<motion.div
  whileHover={animations.hoverScale.medium}
  whileTap={animations.tapScale}
>
  {/* content */}
</motion.div>
```

### Stagger Animations

```typescript
<motion.ul
  variants={animations.staggerContainer}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.li key={item.id} variants={animations.staggerItem}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

## 🧩 Components

### Button

```typescript
import { Button } from '@/design-system';

// Primary button
<Button variant="primary" size="md">
  Click me
</Button>

// Secondary button
<Button variant="secondary" size="sm">
  Cancel
</Button>

// Text button
<Button variant="text">
  Learn more
</Button>

// Icon button
<Button variant="icon" size="md">
  <Icon />
</Button>

// Button as link
<Button asLink href="/about" variant="primary">
  Go to About
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'text' | 'icon' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `asLink`: boolean (default: false)
- `href`: string (required if asLink is true)
- All standard button HTML attributes

### NavLink

```typescript
import { NavLink } from '@/design-system';

<NavLink to="/about">About</NavLink>
<NavLink to="/work">Work</NavLink>
```

**Props:**
- `to`: string (required) - React Router path
- `children`: ReactNode (required)
- `className`: string (optional) - Additional classes
- `onClick`: () => void (optional) - Click handler

## 🛠️ Utility Functions

### cn (Class Names)

Combines multiple class names, filtering out falsy values:

```typescript
import { cn } from '@/design-system';

const buttonClass = cn(
  'base-class',
  isActive && 'active-class',
  isDanger && 'danger-class',
  className
);
```

## 📝 Tailwind Component Classes

These classes are defined in `src/index.css` and can be used directly:

```css
.bg-primary          /* Primary background color */
.container-custom    /* Max-width container with padding */
.center-layout       /* Center text and layout */
.link                /* Interactive link styling */
.icon-btn            /* Icon button base styling */
.card                /* Card with shadow and padding */
.avatar              /* Circular avatar image */
.project-img         /* Project image with shadow */
```

## 🎯 Usage Examples

### Complete Component Example

```typescript
import { motion } from 'framer-motion';
import { animations, tokens, Button, cn } from '@/design-system';

function HeroSection() {
  return (
    <motion.section
      {...animations.pageEntry}
      className={cn(
        tokens.spacing.section.yLarge,
        tokens.colors.bg.primary
      )}
    >
      <motion.h1
        {...animations.fadeUp}
        className={tokens.typography.hero}
      >
        Welcome
      </motion.h1>

      <motion.p
        {...animations.fadeInView}
        className={cn(
          tokens.typography.bodyLarge,
          tokens.colors.text.tertiary,
          tokens.spacing.mb.responsive.small
        )}
      >
        This is a hero section
      </motion.p>

      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </motion.section>
  );
}
```

### Responsive Patterns

The design system uses consistent breakpoints:
- `sm:` - 640px and above
- `md:` - 768px and above
- `lg:` - 1024px and above (used sparingly)

Common responsive patterns:
```typescript
// Responsive margins
tokens.spacing.mb.responsive.small    // mb-4 md:mb-6

// Responsive gaps
tokens.spacing.gap.responsive.small   // gap-4 sm:gap-6

// Responsive typography (already built into font sizes)
tokens.typography.body                // text-base (responsive via clamp)
```

## 🔄 Migration Guide

### Before (duplicated code):

```typescript
<Link
  to="/about"
  className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-base md:text-lg font-medium no-underline"
>
  About
</Link>
```

### After (using design system):

```typescript
<NavLink to="/about">About</NavLink>
```

### Before (duplicated animation):

```typescript
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Content
</motion.div>
```

### After (using design system):

```typescript
<motion.div {...animations.fadeUp}>
  Content
</motion.div>
```

## 🎨 Color Palette Reference

### Primary Colors
- `primary-light`: #a0daff (light blue)
- `primary`: #60b5e8 (blue)
- `primary-dark`: #2c5282 (dark blue)

### Accent Colors
- `accent-red`: #ff6b6b
- `accent-gold`: #ffd93d
- `accent-green`: #6bcf7f
- `accent-bronze`: #cd7f32

### Gray Scale
- `gray-50` through `gray-900` (Tailwind default scale)

## ⚡ Performance Notes

- All animation presets use Framer Motion's optimized transforms
- Transition duration defaults to 200ms for snappy interactions
- Component classes are extracted to reduce bundle size
- Design tokens allow for tree-shaking unused utilities

## 🔮 Future Enhancements

Potential additions to the design system:
- [ ] Dark mode color tokens
- [ ] Additional button variants (outline, ghost)
- [ ] Form input components
- [ ] Modal/Dialog components
- [ ] Toast notification system
- [ ] Loading spinner components
- [ ] Badge/Chip components
