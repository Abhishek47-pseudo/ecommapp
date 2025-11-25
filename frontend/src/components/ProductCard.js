import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.stock < 10 && product.stock > 0 && (
          <span className="badge low-stock">Only {product.stock} left</span>
        )}
        {product.stock === 0 && (
          <span className="badge out-of-stock">Out of Stock</span>
        )}
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          <span className="stars">{'⭐'.repeat(Math.round(product.rating))}</span>
          <span className="rating-value">{product.rating}</span>
        </div>
        
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" disabled={product.stock === 0}>
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
