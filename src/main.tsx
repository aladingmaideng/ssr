import react from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from './App';

if (process.env.NODE_ENV == 'development') {
    const root = createRoot(document.querySelector('#root') as any);
    root.render(<App />);
} else {
    hydrateRoot(document.querySelector('#root') as any, <App />);
}