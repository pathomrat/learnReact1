import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductItem from './component/product/ProductItem';

function App() {
  return (
    <div >
      <Header />
      
      <ProductItem productName="IPhone X" unitPrice="39900" />
      <ProductItem productName="IPad Pro 2020" unitPrice="29900" />
      <ProductItem productName="Macbook Air 2020" unitPrice="29900" />

      <Footer company="pathomrat Co." email="pathomrat97@gmail.com" />
    </div>
  );
}

export default App;
