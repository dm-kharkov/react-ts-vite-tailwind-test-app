import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Добавьте пути к вашим файлам
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
  ],
}
