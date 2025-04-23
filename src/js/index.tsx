import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/main.css';
import { App } from './App';
import { ChakraProvider } from "@chakra-ui/react";
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render the React component instead
const root = createRoot(document.getElementById('app')!);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
