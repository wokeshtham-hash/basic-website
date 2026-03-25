import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink className="brand brand-link" to="/">
          Starter Shop
        </NavLink>

        <div className="nav-actions">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
          <NavLink className="cart-button" to="/cart">
            Cart
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
