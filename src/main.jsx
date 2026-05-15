import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";
import { store } from './redux/store.jsx';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
<ThemeProvider>
  <BrowserRouter 
    future={{ 
      v7_startTransition: true, 
      v7_relativeSplatPath: true 
    }}
  >
    <App />
  </BrowserRouter>
</ThemeProvider>
    </Provider>
  </React.StrictMode>
);