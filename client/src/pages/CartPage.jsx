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
    <div className="page-shell page-content cart-page">
      <section className="catalog-hero page-frame">
        <div>
          <p className="section-kicker">Shopping bag</p>
          <h1 className="section-title">Minimal cart styling with stronger retail hierarchy.</h1>
          <p className="section-copy">
            Quantity controls, pricing, and shared Redux state remain intact, now with a cleaner
            monochrome layout that fits the rest of the storefront.
          </p>
        </div>
        <div className="catalog-meta">
          <div>
            <span>Items</span>
            <strong>{items.length}</strong>
          </div>
          <div>
            <span>Subtotal</span>
            <strong>USD {subtotal}</strong>
          </div>
        </div>
      </section>

      {items.length === 0 && (
        <section className="card cart-empty page-frame">
          <h2>Your bag is empty</h2>
          <p>Add items from the products page to build the cart experience.</p>
        </section>
      )}

      {items.length > 0 && (
        <section className="cart-layout page-frame">
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-copy">
                  <p className="cart-item-kicker">{item.category}</p>
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
            <p className="section-kicker">Order summary</p>
            <h2>Subtotal</h2>
            <p className="summary-price">USD {subtotal}</p>
            <p className="summary-copy">
              Shipping, tax, and checkout can be layered in next without changing the current cart state flow.
            </p>
            <button className="button product-button" type="button">
              Proceed to checkout
            </button>
          </aside>
        </section>
      )}
    </div>
  );
}
