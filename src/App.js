// import React from 'react'
// import "./App.css"
// import Home from './component/Home'
// import{Route, Routes,} from 'react-router-dom';
// import Footer from  "./component/Footer"
// import Contact from "./component/Contact";
// import About from './component/About';
// import Product from "./component/Product"
// import Header from './component/Header';

// const App = () => {
//   return (
//     <>
//     <Header/>
//     <Routes>
//       <Route to=""  Component={Home}/>
//       <Route to="/product"  Component={Product}/>
//       <Route to="/contact"  Component={Contact}/>
//       <Route to="/about"  Component={About}/>  
//     </Routes>

//     <Footer/>

//     </>
  
//   )
// }

// export default App
import React from 'react';
import "./App.css";
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from  "./component/Footer";
import Contact from "./component/Contact";
import About from './component/About';
import Product from "./component/Product";
import Header from './component/Header';
import Cart from './component/Cart';
import ProductDetail from './component/ProductDetail';
import Checkout from './component/Checkout';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

