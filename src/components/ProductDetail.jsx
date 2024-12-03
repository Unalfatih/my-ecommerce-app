import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../contexts/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

const ProductDetail = () => {
  const {id} = useParams(); // URL'den gelen id parametresini al
  const product = products.find(p => p.id === parseInt(id));
  const {addToCart} = useContext(CartContext);

  if(!product) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>{formatCurrency(product.price)}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button onClick={() => addToCart(product)} style={styles.button}>
        Sepete Ekle
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  image: {
    width: '300px',
    height: 'auto',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    marginTop: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default ProductDetail;