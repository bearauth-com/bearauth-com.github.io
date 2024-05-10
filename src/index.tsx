import 'modern-normalize';
import './styles/index.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home.mdx';
import RouteNotFound from './pages/route-not-found.mdx';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  </BrowserRouter>,
);
