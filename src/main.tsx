import { createRoot, hydrateRoot } from 'react-dom/client';
// import { ConfigProvider } from "antd";
// import zh_CN from "antd/es/locale/zh_CN";

import App from './App';

if (process.env.NODE_ENV == 'development') {
  const root = createRoot(document.querySelector('#root') as any);
  root.render(<App />);
} else {
  hydrateRoot(document.querySelector('#root') as any, <App />);
}
