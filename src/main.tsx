import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

if (process.env.NODE_ENV == 'development') {
    const root = createRoot(document.querySelector('#root') as any);
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
} else {
    hydrateRoot(
        document.querySelector('#root') as any,
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
