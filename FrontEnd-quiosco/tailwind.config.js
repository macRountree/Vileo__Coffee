/** @type {import('tailwindcss').Config} */
export default {
  content: [    //*Content nos indica en que  archivos habra clases de tailwind.css
    "./index.html",
    "./src/**/*.{js,jsx}", //*Esta extension busca de forma recursiva los archivos dentro  de src cualquier archivo con la extension .js .jsx en nuestro caso.. si en otro proyecto usamos TS agregamos .ts .tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

