import { Routes, Route } from "react-router-dom";

import { Search } from './pages/Search';
import { Results } from './pages/Results';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';
import { ErrorBoundary } from './pages/ErrorBoundary';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

export function App() {

  return (
    <>      
      <Routes>
        <Route path="/" element={<Search />} errorElement={<ErrorBoundary />} />
        <Route path="/items?search=" element={<Results />} errorElement={<ErrorBoundary />} />
        <Route path="/items/:id" element={<ProductDetails />} errorElement={<ErrorBoundary />} />
        <Route path="*" element={<NotFound />} errorElement={<ErrorBoundary />} />
      </Routes>
    </>
  );
}
