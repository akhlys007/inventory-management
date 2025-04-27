/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    'tailwindcss', // Ensure TailwindCSS is referenced here
    'autoprefixer', // Optionally use Autoprefixer (commonly used with Tailwind)
  ],
};

export default config;
