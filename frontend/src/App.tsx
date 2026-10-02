import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Pages
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Portfolio } from './pages/Portfolio';
import { ProductDetail } from './pages/ProductDetail';
import { ExploreRice } from './pages/ExploreRice';
import { Sustainability } from './pages/Sustainability';
import { Careers } from './pages/Careers';
import { CSR } from './pages/CSR';
import { ContactUs } from './pages/ContactUs';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper that conditionally hides public Navbar/Footer on admin dashboard
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isAdminPath = pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-[#FBF6EE]">
      {!isAdminPath && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isAdminPath && <Footer />}
      {!isAdminPath && <AccessibilityWidget />}
      {!isAdminPath && <FloatingWhatsApp />}
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
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/csr" element={<CSR />} />
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
