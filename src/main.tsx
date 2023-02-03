import react from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from './App';

// const root = createRoot(document.querySelector('#root'));

// root.render(<App />);

hydrateRoot(document.querySelector('#root') as any,<App />);