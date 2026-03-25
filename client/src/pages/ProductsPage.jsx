import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [source, setSource] = useState("loading");
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");

        if (response.ok === false) {
          throw new Error("Request failed with status " + response.status);
        }

        const data = await response.json();
        const normalizedProducts = data.products.map((product, index) => ({
          id: product._id || product.slug || String(index),
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          description: product.description,
          image: product.image
        }));

        setProducts(normalizedProducts);
        setSource(data.source || "seed");
        setStatus("success");
      } catch (requestError) {
        setError(requestError.message);
        setStatus("error");
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="page-shell page-content products-page">
      <section className="catalog-hero page-frame">
        <div>
          <p className="section-kicker">Shop all</p>
          <h1 className="section-title">Monochrome catalog with a sharper fashion-retail rhythm.</h1>
          <p className="section-copy">
            The grid keeps your live backend products, but the presentation now leans into larger
            imagery, tighter card composition, and cleaner editorial spacing.
          </p>
        </div>
        <div className="catalog-meta">
          <div>
            <span>Products</span>
            <strong>{products.length || 4}</strong>
          </div>
          <div>
            <span>Source</span>
            <strong>{source}</strong>
          </div>
        </div>
      </section>

      {status === "loading" && (
        <section className="product-grid page-frame">
          <article className="card card-muted">
            <h2>Loading products</h2>
            <p>Fetching inventory from the backend.</p>
          </article>
        </section>
      )}

      {status === "error" && (
        <section className="product-grid page-frame">
          <article className="card card-error">
            <h2>Unable to load products</h2>
            <p>{error}</p>
          </article>
        </section>
      )}

      {status === "success" && (
        <section className="product-grid page-frame product-grid-spacious">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}
