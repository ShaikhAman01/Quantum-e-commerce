# Quantum E-Commerce

## Description:
A fully functional e-commerce platform built with React, Firebase, and Tailwind CSS. The platform includes an admin panel for managing product CRUD operations and a customer-side interface for browsing products, adding items to the cart, and making purchases. Authentication is integrated to ensure a secure experience, with real-time updates powered by Firebase Firestore.

## Features:
- Admin panel for creating, reading, updating, and deleting (CRUD) products
- Customer-side cart management
- User authentication
- Real-time data management using Firebase

## Technologies Used:
- React.js (Frontend)
- Firebase (Firestore for real-time database)
- Tailwind CSS (Styling)

## How to Run:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShaikhAman01/Quantum-e-commerce
   ```

2. **Navigate into the project directory**:
   ```bash
   cd Quantum-e-commerce
   ```

3. **Set up Firebase environment variables**:
   - Create a `.env` file in the root of the project and add your Firebase configuration:

     ```bash
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
     ```

   - Replace the placeholder values (`your-api-key`, etc.) with the actual Firebase project configuration from your [Firebase Console](https://console.firebase.google.com/).

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Run the application**:
   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser to view the app.
