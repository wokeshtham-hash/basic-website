import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from "../features/cart/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="page-shell page-content">
      <section className="section-heading">
        <p className="eyebrow">Cart</p>
        <h1 className="section-title">Your selected products.</h1>
        <p className="hero-copy section-copy">
          Cart state is shared through Redux Toolkit, so the navbar count and this page stay in sync.
        </p>
      </section>

      {items.length === 0 && (
        <section className="card cart-empty">
          <h2>Your cart is empty</h2>
          <p>Add items from the products page to see them here.</p>
        </section>
      )}

      {items.length > 0 && (
        <section className="cart-layout">
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-copy">
                  <h2>{item.name}</h2>
                  <p>Unit price: USD {item.price}</p>
                </div>
                <div className="cart-controls">
                  <button type="button" className="qty-button" onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button type="button" className="qty-button" onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                </div>
                <button type="button" className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <p className="panel-label">Summary</p>
            <h2>Subtotal</h2>
            <p className="summary-price">USD {subtotal}</p>
            <p className="summary-copy">Shipping, tax, and checkout can be added next as separate flows.</p>
          </aside>
        </section>
      )}
    </div>
  );
}
