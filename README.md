# 🏡 Hominex Landing Page

Welcome to the Hominex Landing Page project! This is a modern, responsive real estate consultation platform built with Next.js, React, and Tailwind CSS. It features beautiful glassmorphism UI, custom Persian fonts, and interactive forms for property consultation.

---

## 🚀 Features

- **Next.js 14** with App Router for fast, SEO-friendly pages
- **Tailwind CSS** for utility-first, responsive styling
- **Glassmorphism** design for a modern, elegant look
- **Custom Persian Font** (Modam) for a unique brand identity
- **Dynamic Consultation Forms** for different property types
- **RTL (Right-to-Left)** support for Persian language
- **Interactive Map** (Leaflet-ready)
- **Reusable Components** (Header, Button, Dropdown, Forms)
- **Dark/Light Mode** with smooth gradients

---

## 📁 Project Structure

```
landing/
├── app/
│   ├── globals.css         # Global styles, fonts, and variables
│   ├── layout.tsx          # Root layout with Header
│   ├── page.tsx            # Main landing page
│   └── consultation/
│       └── page.tsx        # Consultation forms and logic
├── components/
│   ├── Header.tsx          # Navigation bar with active state
│   └── UI/
│       ├── DropdownContainer.tsx
│       └── consultation/
│           ├── Button.tsx
│           └── Forms.tsx   # All consultation forms
├── public/
│   ├── logo.png            # Brand logo
│   └── assets/font/modam/  # Modam font files
├── Redux/                  # (Optional) Redux store setup
├── package.json
└── ...
```

---

## 🛠️ Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

3. **Build for production:**
   ```sh
   npm run build
   ```

---

## 🗺️ Map Integration

- Uses [Leaflet](https://leafletjs.com/) and [react-leaflet](https://react-leaflet.js.org/) for interactive maps.
- Install with:
  ```sh
  npm install leaflet react-leaflet
  ```
- Import CSS in `globals.css`:
  ```css
  @import "leaflet/dist/leaflet.css";
  ```

---

## ✨ UI/UX Highlights

- **Header:** Responsive, glassy, with animated hover and active dot indicator
- **Buttons:** Glassmorphism, animated, accessible
- **Forms:** Dynamic, RTL, with validation-ready structure
- **Colors:** Customizable via CSS variables for easy theming
- **Font:** Modam (Persian), loaded globally

---

## 📦 Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [Leaflet](https://leafletjs.com/) & [react-leaflet](https://react-leaflet.js.org/)

---

## 📝 Customization

- **Add new forms:** Edit `components/UI/consultation/Forms.tsx`
- **Change theme:** Edit CSS variables in `app/globals.css`
- **Update navigation:** Edit `components/Header.tsx`

---

## 👨‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is for demonstration and educational purposes.

---

## 🌟 Enjoy building with Hominex!

---

## Tasks

1. cleanCode ( consultation page )
2. convert images to webp format
