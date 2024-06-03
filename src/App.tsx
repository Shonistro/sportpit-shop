import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Footer from './components/Footer';
import ProductListPage from './pages/ProductListPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/auth/LoginPage'; 
import SearchResultsPage from './pages/SearchResultsPage';
import PrivateRoute from './components/PrivateRout';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<ProductListPage />} />
            <Route path="/category/:slug" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<PrivateRoute path="/products" component={ProductPage} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;