import React from 'react';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductList from './components/product/ProductList';
import ManagePanel from './components/common/ManagePanel';

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <ProductListPage /> */}
      {/* <ProductPage /> */}
    </div>
  );
}

export default App;
