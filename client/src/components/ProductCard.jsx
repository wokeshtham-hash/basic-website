import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} />
        <span className="product-badge">{product.category}</span>
      </div>
      <div className="product-meta">
        <div className="product-heading-row">
          <div>
            <p className="product-category">Ready to wear</p>
            <h3>{product.name}</h3>
          </div>
          <span className="product-price">USD {product.price}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <button
          className="button product-button"
          type="button"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to bag
        </button>
      </div>
    </article>
  );
}
