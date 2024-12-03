// components/ProductList.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatCurrency';  // Fiyat formatlama

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Sepete ürün ekleme fonksiyonu

  // API'den ürün verilerini çekiyoruz
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('API hatası:', error));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ürün Listesi</h2>
      <div style={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.title} style={styles.productImage} />
            <h3>{product.title}</h3>
            <p>{formatCurrency(product.price)}</p>
            <button 
              onClick={() => addToCart(product)} 
              style={styles.addButton}
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  addButton: {
    padding: '10px 15px',
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ProductList;
