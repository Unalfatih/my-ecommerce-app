// components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <div style={styles.empty}>Sepetiniz boş.</div>;
  }

  return (
    <div style={styles.container}>
      <h2>Sepetiniz</h2>
      <ul style={styles.list}>
        {cart.map(product => (
          <li key={product.id} style={styles.item}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.price} TL</p>
              <div style={styles.quantity}>
                <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(product.id)} style={styles.button}>
                Sepetten Çıkar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={styles.total}>
        <strong>Toplam: {getTotalPrice()} TL</strong>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  image: {
    width: '50px',
    height: 'auto',
    marginRight: '10px',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '5px',
  },
  total: {
    marginTop: '20px',
    fontSize: '18px',
  },
  empty: {
    padding: '20px',
    textAlign: 'center',
  }
};

// Dışa aktarma
export default Cart;
