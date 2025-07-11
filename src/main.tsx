import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ use HashRouter
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter> {/* ✅ Wrap with HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);
