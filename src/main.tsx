import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AppRouter from './routes/AppRouter';
import "./index.css";

import { ThemeProvider } from './provider/ThemeProvider'; // Import ThemeProvider

// Get the root element
const container = document.getElementById('root');
const root = createRoot(container!); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap AppRouter with ThemeProvider */}
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
