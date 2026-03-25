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
    <div className="page-shell page-content">
      <section className="section-heading">
        <p className="eyebrow">Inventory</p>
        <h1 className="section-title">Curated products from your backend.</h1>
        <p className="hero-copy section-copy">
          This page is rendered through React Router and populated from the Express products API.
        </p>
        <div className="status-pill">Data source: {source}</div>
      </section>

      {status === "loading" && (
        <section className="product-grid">
          <article className="card card-muted">
            <h2>Loading products</h2>
            <p>Fetching inventory from the backend.</p>
          </article>
        </section>
      )}

      {status === "error" && (
        <section className="product-grid">
          <article className="card card-error">
            <h2>Unable to load products</h2>
            <p>{error}</p>
          </article>
        </section>
      )}

      {status === "success" && (
        <section className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}
