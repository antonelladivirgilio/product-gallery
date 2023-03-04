import { Routes, Route } from "react-router-dom";

import { SearchBox } from './pages/SearchBox';
import { Results } from './pages/Results';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';
import { ErrorBoundary } from './pages/ErrorBoundary';

export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SearchBox />} errorElement={<ErrorBoundary />} />
        <Route path="/items" element={<Results />} errorElement={<ErrorBoundary />} />
        <Route path="/items/:id" element={<ProductDetails />} errorElement={<ErrorBoundary />} />
        <Route path="*" element={<NotFound />} errorElement={<ErrorBoundary />} />
      </Routes>
    </>
  );
}
