# metadata
  - available on layout.tsx 

# setting up tailwind and testing to make sure everything is configured properly
  - tailwind.config.ts
      content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],


* Setting up the navigation
  - Navbar created -> Container created -> Logo created
    - Logo creation in `navbar`
      # use of `useRouter`
        *  router = useRouter()
    - Search component created in `navbar`
    - UserMenu component created 
    * all of the sub menus were created with mobile-first design approach
    * for any of the icons that we use we can utilize react-icons 
  