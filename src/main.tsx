import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Landing } from './pages/Landing';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="portfolio-stars" aria-hidden="true" />
    <Landing />
  </StrictMode>,
);
