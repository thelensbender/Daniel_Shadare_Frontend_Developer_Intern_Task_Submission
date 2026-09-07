# Ijinleifeoluwa-Daniel-Shadare-Frontend-Developer-Intern-Task-Submission: Tobams Group

## Setup

1. Clone the repo: `git clone https://github.com/thelensbender/Daniel_Shadare_Frontend_Developer_Intern_Task_Submission`
2. Install dependencies: `npm install`
3. Run the dev server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Live URL

<https://tobamsgroupids.vercel.app/>

## Figma Design Link

<https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=1-1394&t=ag5LLy7ruxMVB0bC-0>

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- next/font (Google Fonts: Nunito, Nunito Sans)

## Design Deviations

- **Service Section spacing**: Figma's spec for this section used a different padding spacing that didn't match any other card in the design (all other cards use consistent internal padding). Implemented with `p-6` (24px) padding to match the rest of the card system.

- **Requirement and design screen size contradiction**: The task requirement stated that `"The page must look correct at 425px (mobile), 768px (tablet), and 1280px+ (desktop)."` But the figma design sizes were `Desktop: 1440px` and `Mobile: 375px`. I followed the figma design screen sizes.

- **Rescaled all Sections on different screen sizes**: Figma's spec for the navbar laptop view was looking messy on tablet and smaller laptops screen size. I scaled down the `font size, gap, padding, width, height, display` to fit the screen. But I made sure the laptop and mobile view is exactly like figma design.
