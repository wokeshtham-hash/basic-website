import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const fallbackProducts = [
  {
    id: "terra-carryall",
    slug: "terra-carryall",
    name: "Terra Carryall",
    category: "Bags",
    price: 128,
    description: "A structured everyday bag with reinforced canvas, internal laptop sleeve, and weather-ready trim.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "north-arc-jacket",
    slug: "north-arc-jacket",
    name: "North Arc Jacket",
    category: "Outerwear",
    price: 184,
    description: "A lightweight shell for shifting weather with a sharp silhouette and breathable lining.",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "field-bottle",
    slug: "field-bottle",
    name: "Field Bottle",
    category: "Accessories",
    price: 34,
    description: "A stainless bottle with powder-coated finish, easy-carry loop, and all-day insulation.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80"
  }
];

const categoryCards = [
  {
    title: "Outer layers",
    copy: "Sharper silhouettes, all-season layering, and a darker editorial palette.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Minimal accessories",
    copy: "Bags, bottles, and everyday add-ons merchandised like a fashion drop.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Monochrome essentials",
    copy: "Clean utility basics with strong contrast, spacing, and image-first presentation.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function HomePage() {
  const [products, setProducts] = useState(fallbackProducts);

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

        if (normalizedProducts.length > 0) {
          setProducts(normalizedProducts);
        }
      } catch (_error) {
        setProducts(fallbackProducts);
      }
    }

    loadProducts();
  }, []);

  const heroPrimary = products[1] || fallbackProducts[1];
  const heroSecondary = products[0] || fallbackProducts[0];
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="page-shell home-page">
      <section className="hero-banner page-frame">
        <div className="hero-copy-wrap">
          <p className="hero-kicker">New season arrival</p>
          <h1>Editorial storefront styling inspired by premium streetwear retail.</h1>
          <p className="hero-copy">
            A stronger fashion-commerce direction with bold contrast, larger imagery,
            sharper spacing, and cleaner merchandising across every route.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/products">
              Shop collection
            </Link>
            <Link className="ghost-button" to="/cart">
              View bag
            </Link>
          </div>
          <div className="hero-meta-row">
            <div>
              <span className="meta-label">Drop</span>
              <strong>Spring / Summer 2026</strong>
            </div>
            <div>
              <span className="meta-label">Focus</span>
              <strong>Outerwear, bags, essentials</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <article className="hero-tall-card">
            <img src={heroPrimary.image} alt={heroPrimary.name} />
            <div className="image-card-copy">
              <p>{heroPrimary.category}</p>
              <h2>{heroPrimary.name}</h2>
            </div>
          </article>
          <article className="hero-wide-card">
            <img src={heroSecondary.image} alt={heroSecondary.name} />
            <div className="sale-chip">New arrival</div>
          </article>
        </div>
      </section>

      <section className="announcement-band page-frame">
        <p>Streetwear-inspired layout system</p>
        <p>Full-width image emphasis</p>
        <p>Monochrome product merchandising</p>
      </section>

      <section className="editorial-section page-frame">
        <div className="section-intro">
          <p className="section-kicker">Featured categories</p>
          <h2>Collection blocks designed like a fashion landing page.</h2>
        </div>

        <div className="editorial-grid">
          {categoryCards.map((card) => (
            <article className="editorial-card" key={card.title}>
              <img src={card.image} alt={card.title} />
              <div className="editorial-card-copy">
                <p>{card.title}</p>
                <span>{card.copy}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-feature page-frame">
        <div className="split-feature-copy">
          <p className="section-kicker">Store direction</p>
          <h2>Built to feel closer to a premium apparel catalog than a starter template.</h2>
          <p>
            The layout leans on strong typographic hierarchy, promotional strips, image-led
            merchandising, and tighter utility components so the storefront feels more deliberate.
          </p>
        </div>
        <div className="split-feature-panel">
          <div>
            <span>01</span>
            <p>Large editorial hero with stacked product imagery</p>
          </div>
          <div>
            <span>02</span>
            <p>Category-led content blocks to break up the product stream</p>
          </div>
          <div>
            <span>03</span>
            <p>Sharper product cards, stronger footer, cleaner monochrome palette</p>
          </div>
        </div>
      </section>

      <section className="featured-products page-frame">
        <div className="section-intro section-intro-row">
          <div>
            <p className="section-kicker">New arrivals</p>
            <h2>Merchandised from the live backend inventory.</h2>
          </div>
          <Link className="text-link" to="/products">
            View all products
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
