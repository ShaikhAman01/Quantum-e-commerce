# Quantum E-Commerce

A single-page e-commerce platform for electronics, built with React, Firebase, and Tailwind CSS. It includes an admin panel for managing products and orders, and a customer side for browsing products, managing a cart, and placing orders — with real-time updates powered by Firebase Firestore.

## Features

- Admin dashboard for product CRUD and viewing orders/users
- Customer cart with quantity management (persisted in localStorage)
- User authentication (email/password + Google sign-in) with role-based routing
- Real-time data via Firebase Firestore

## Tech Stack

- React 18 + Vite
- Firebase (Auth + Firestore)
- Redux Toolkit (cart) + React Context (data)
- Tailwind CSS

## How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShaikhAman01/Quantum-e-commerce
   cd Quantum-e-commerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase environment variables** — create a `.env` file in the project root:

   ```bash
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

   Replace the placeholder values with your Firebase project configuration from the [Firebase Console](https://console.firebase.google.com/).

4. **Run the dev server**:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser.

Other scripts: `npm run build` (production build), `npm run preview` (serve the build locally), `npm run lint`.
