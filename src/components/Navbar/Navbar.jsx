import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";

const Navbar = () => {
  const { cart } = useCart();
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-logo">
        <Link to="/">ShopEase</Link>
      </div>
      <div className="nav-search">
        <input type="text" placeholder="Search products..." />
      </div>


      {/* Center: Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>

      {/* Right: Auth */}
      <div className="nav-auth">
        {user ? (
          <>
            <span className="nav-user">Hi, {user}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("Guest User")}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
