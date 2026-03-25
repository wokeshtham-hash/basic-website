import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div className="product-meta">
        <p className="product-category">{product.category}</p>
        <div className="product-heading-row">
          <h3>{product.name}</h3>
          <span className="product-price">USD {product.price}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <button
          className="button product-button"
          type="button"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
