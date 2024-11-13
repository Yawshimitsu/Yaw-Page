import { useState } from 'react';
import { Link } from 'react-router-dom';

const EcommerceProductPage = () => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (product: string) => {
    setCart([...cart, product]);
  };

  return (
    <div className="project-page">
      <h2>E-commerce Product Page</h2>
      <div className="product">
        <h3>Product 1</h3>
        <button onClick={() => addToCart("Product 1")}>Add to Cart</button>
      </div>
      <div className="product">
        <h3>Product 2</h3>
        <button onClick={() => addToCart("Product 2")}>Add to Cart</button>
      </div>
      <div className="product">
        <h3>Product 3</h3>
        <button onClick={() => addToCart("Product 3")}>Add to Cart</button>
      </div>
      <h3>Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Back to Home Link */}
      <Link to="/yaw-page" className="back-to-home">
        ← Back to Home
      </Link>
    </div>
  );
};

export default EcommerceProductPage;