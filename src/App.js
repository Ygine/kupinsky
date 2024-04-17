import {Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout"

import HomePage from "./pages/HomePage"
import ContactsPage from "./pages/Contacts"
import ImpressionPage from "./pages/Impression"
import ProductsPage from "./pages/Products"
import PricingPage from "./pages/Pricing"
import ReviewsPage from "./pages/Reviews"
import NotFoundPage from "./pages/NotFoundPage"

import AuthProvider from "./hook/AuthProvider"

const App = () => {

  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={ <Layout />}>
        <Route index element={ <HomePage />}/>
        <Route path="about_me" element={ <HomePage />}/>
        <Route path="contacts" element={ <ContactsPage />}/>
        <Route path="impression" element={ <ImpressionPage />}/>
        <Route path="product_photography" element={ <ProductsPage />}/>
        <Route path="reviews" element={ <ReviewsPage />}/>
        <Route path="pricing" element={ <PricingPage />}/>
      </Route>
      <Route path="*" element={ <NotFoundPage />}/>
    </Routes>
  </AuthProvider>
  );
}

export default App;
