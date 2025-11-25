import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Filters.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function Filters({ filters, onFilterChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/products/categories`);
      setCategories(['All', ...response.data]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleReset = () => {
    onFilterChange({
      category: 'All',
      minPrice: '',
      maxPrice: ''
    });
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3>Filters</h3>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>

      <div className="filter-group">
        <label>Category</label>
        <select name="category" value={filters.category} onChange={handleChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Price Range</label>
        <div className="price-inputs">
          <input
            type="number"
            name="minPrice"
            placeholder="Min"
            value={filters.minPrice}
            onChange={handleChange}
            min="0"
          />
          <span>-</span>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={handleChange}
            min="0"
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
