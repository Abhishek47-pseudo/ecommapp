import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';
import ProductCard from './ProductCard';
import Filters from './Filters';
import Pagination from './Pagination';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    fetchProducts();
  }, [currentPage, filters]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = {
        page: currentPage,
        limit: 20
      };

      if (filters.category !== 'All') {
        params.category = filters.category;
      }
      if (filters.minPrice) {
        params.minPrice = filters.minPrice;
      }
      if (filters.maxPrice) {
        params.maxPrice = filters.maxPrice;
      }

      const response = await axios.get(`${API_URL}/products`, { params });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      setTotalProducts(response.data.totalProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="product-list-container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">🛒 E-Shop</h1>
          <p className="tagline">Discover Amazing Products</p>
        </div>
      </header>

      <div className="main-content">
        <Filters filters={filters} onFilterChange={handleFilterChange} />

        <div className="products-section">
          <div className="products-header">
            <h2>Products</h2>
            <p className="product-count">{totalProducts} items found</p>
          </div>

          {loading ? (
            <div className="loading">Loading products...</div>
          ) : products.length === 0 ? (
            <div className="no-products">No products found</div>
          ) : (
            <>
              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
