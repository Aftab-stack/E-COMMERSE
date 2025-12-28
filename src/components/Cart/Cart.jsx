import { useCart } from "../../contexts/CartContext.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <>
      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </>
  );
};

export default Cart;
