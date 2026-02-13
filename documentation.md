# Project Documentation

## Fonts

### Oswald (Google Fonts)

- **Source**: [Google Fonts - Oswald](https://fonts.google.com/specimen/Oswald)
- **Implementation**:
  - Imported in `app/layout.tsx` using `next/font/google`.
  - Variable `--font-oswald` added to `<body>`.
  - Tailwind utility `font-oswald` configured in `app/globals.css`.
- **Navigation State**:
  - The `Home` component manages `isMenuOpen` state.
  - `AnimatePresence` (mode="wait") handles the transition between `Hero` and `Menu` components.
  - When the menu is closed, the `Hero` section is displayed.
  - When the menu is open, the `Hero` section is replaced by the `Menu` component.

## Styling

- **Framework**: Tailwind CSS v4
- **Theme Configuration**: `app/globals.css` (using `@theme` directive)
- **Fonts**:
  - Sans: Geist Sans (`font-sans`)
  - Mono: Geist Mono (`font-mono`)
  - Display/Heading: Oswald (`font-oswald`)

##### Hover Effects

- **Icons**:
  - Implemented using Tailwind's `group` and `group-hover` utilities.
  - **Behavior**: Icons are initially hidden (`w-0 opacity-0`) and collapse to take up zero space. On hover, they expand (`w-[24px]` on mobile, `w-[48px]` on desktop), fade in (`opacity-100`), and push the text to the right.
  - **Transition**: `transition-all duration-300 ease-in-out` ensures smooth animation of width, margin, and opacity.
  - **Border Bottom**:
    - Uses an absolute `span` overlay.
    - **Initial**: `scale-x-0` (invisible), `origin-left`.
    - **Hover**: `scale-x-100` (expands from left to right).
    - **Transition**: `transition-transform duration-500 ease-out`.
    - **Static Border**: The base `border-b` opacity was reduced to `border-white/20` to emphasize the animated highlight.
  - **Number Text**:
    - **Hover**: Scales up (`scale-150`) and rotates slightly (`rotate-12`).
    - **Transition**: `transition-transform duration-500`.

## Components

- **Header**: Navigation header with toggleable menu button.
- **Menu**: Full-screen navigation menu with hover effects (extracted from Home).
- **Hero**: Hero section component.
- **Footer**: Footer component.
