import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h2>{product.name}</h2>
            <p>{product.price} TL</p>
            <Link to={`/product/${product.id}`} style={styles.link}>
                Detayları Gör
            </Link>
        </div>
    );
};

const styles = {
    card: {
      border: '1px solid #ddd',
      padding: '10px',
      margin: '10px',
      textAlign: 'center',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    link: {
        display: 'inline-block',
        marginTop: '10px',
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
    }

};

export default ProductCard;