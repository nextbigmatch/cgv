import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Website from '@/app/components/Website';
import ScrollToTop from '@/app/components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Website />} />
      </Routes>
    </BrowserRouter>
  );
}