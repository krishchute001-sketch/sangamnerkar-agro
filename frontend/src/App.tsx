import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Portfolio } from './pages/Portfolio';
import { ProductDetail } from './pages/ProductDetail';
import { ExploreRice } from './pages/ExploreRice';
import { InvestorRelations } from './pages/InvestorRelations';
import { Sustainability } from './pages/Sustainability';
import { MediaNews } from './pages/MediaNews';
import { Careers } from './pages/Careers';
import { ContactUs } from './pages/ContactUs';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';

// Scroll to hash or top helper on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

// Layout wrapper that conditionally hides public Navbar/Footer on admin dashboard
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isAdminPath = pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPath && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isAdminPath && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/explore-rice" element={<ExploreRice />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/media-news" element={<MediaNews />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </AppLayout>
      </Router>
    </AuthProvider>
  );
};

export default App;
