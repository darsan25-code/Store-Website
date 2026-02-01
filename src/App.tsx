import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StoreDetails } from './components/StoreDetails';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CompanyInfoCard } from './components/CompanyInfoCard';
import { VideoShowcase } from './components/VideoShowcase';
import { ProductVideos } from './components/ProductVideos';
import { PipesFittingsPage } from './components/PipesFittingsPage';
import { TilesPage } from './components/TilesPage';
import { BathroomAccessoriesPage } from './components/BathroomAccessoriesPage';
import { SanitarywarePage } from './components/SanitarywarePage';
import { CartPage } from './components/CartPage';
import { CartProvider } from './components/CartContext';
import { Toaster } from 'sonner@2.0.3';
import { useState } from 'react';

type PageType = 'home' | 'pipes-fittings' | 'tiles' | 'bathroom-accessories' | 'sanitaryware' | 'cart';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [previousPage, setPreviousPage] = useState<PageType>('home');

  // Navigate to home
  const navigateToHome = () => {
    setPreviousPage(currentPage);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  // Navigate to cart
  const navigateToCart = () => {
    setPreviousPage(currentPage);
    setCurrentPage('cart');
    window.scrollTo(0, 0);
  };

  // Navigate back from cart to previous page
  const navigateBack = () => {
    // If previous page was a product category, go back to it
    if (previousPage === 'pipes-fittings' || 
        previousPage === 'tiles' || 
        previousPage === 'bathroom-accessories' || 
        previousPage === 'sanitaryware') {
      setCurrentPage(previousPage);
    } else {
      // Otherwise go to home
      setCurrentPage('home');
    }
    window.scrollTo(0, 0);
  };

  // Navigate to category page
  const navigateToCategory = (category: string) => {
    setPreviousPage(currentPage);
    switch (category) {
      case 'Pipes & Fittings':
        setCurrentPage('pipes-fittings');
        break;
      case 'Tiles (Floor & Wall)':
        setCurrentPage('tiles');
        break;
      case 'Bathroom Accessories':
        setCurrentPage('bathroom-accessories');
        break;
      case 'Sanitaryware':
        setCurrentPage('sanitaryware');
        break;
      default:
        setCurrentPage('home');
    }
    window.scrollTo(0, 0);
  };

  return (
    <CartProvider>
      {/* Render Pages Based on Current Page */}
      {currentPage === 'pipes-fittings' && (
        <>
          <PipesFittingsPage onBackToHome={navigateToHome} onNavigateToCart={navigateToCart} />
          <Toaster position="top-center" richColors />
        </>
      )}

      {currentPage === 'tiles' && (
        <>
          <TilesPage onBackToHome={navigateToHome} onNavigateToCart={navigateToCart} />
          <Toaster position="top-center" richColors />
        </>
      )}

      {currentPage === 'bathroom-accessories' && (
        <>
          <BathroomAccessoriesPage onBackToHome={navigateToHome} onNavigateToCart={navigateToCart} />
          <Toaster position="top-center" richColors />
        </>
      )}

      {currentPage === 'sanitaryware' && (
        <>
          <SanitarywarePage onBackToHome={navigateToHome} onNavigateToCart={navigateToCart} />
          <Toaster position="top-center" richColors />
        </>
      )}

      {currentPage === 'cart' && (
        <>
          <CartPage onBackToHome={navigateBack} />
          <Toaster position="top-center" richColors />
        </>
      )}

      {/* Render Home Page */}
      {currentPage === 'home' && (
        <div className="min-h-screen bg-gradient-to-br from-[#0F0F12] via-[#1A1A1F] to-[#0F0F12] overflow-x-hidden">
          <Navigation />
          
          {/* Main content with top padding to account for fixed header (nav height ~80px) */}
          <main className="pt-20 space-y-24">
            <CompanyInfoCard />
            <Hero />
            <Brands />
            <VideoShowcase />
            <Products onNavigateToCategory={navigateToCategory} />
            <ProductVideos />
            <WhyChooseUs />
            <StoreDetails />
          </main>
          
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <WhatsAppButton />
          
          {/* Toast Notifications */}
          <Toaster position="top-center" richColors />
        </div>
      )}
    </CartProvider>
  );
}