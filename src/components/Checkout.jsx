import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <div style={styles.empty}>Sepetiniz boş.</div>;
  }

  return (
    <div style={styles.container}>
      <h2>Sipariş Özeti</h2>
      <ul style={styles.list}>
        {cart.map(product => (
          <li key={product.id} style={styles.item}>
            <h3>{product.name}</h3>
            <p>Miktar: {product.quantity}</p>
            <p>Fiyat: {product.price} TL</p>
            <p>Toplam: {product.price * product.quantity} TL</p>
          </li>
        ))}
      </ul>
      <div style={styles.total}>
        <strong>Genel Toplam: {getTotalPrice()} TL</strong>
      </div>
      <button style={styles.checkoutButton} onClick={() => alert("Siparişiniz alındı!")}>
        Siparişi Tamamla
      </button>
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
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
    paddingBottom: '10px',
  },
  total: {
    fontSize: '18px',
    marginTop: '20px',
  },
  checkoutButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  empty: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Checkout;
