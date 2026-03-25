import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      <div className="promo-bar">
        <p>Worldwide delivery</p>
        <p>Made in Nepal</p>
        <p>New season editorial drop</p>
      </div>

      <header className="site-header">
        <nav className="nav-shell">
          <NavLink className="brand brand-link" to="/">
            <span className="brand-mark">Starter</span>
            <span className="brand-subtitle">Studio</span>
          </NavLink>

          <div className="nav-links">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Shop
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </div>

          <NavLink className="cart-button" to="/cart">
            Bag
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </nav>
      </header>
    </>
  );
}
