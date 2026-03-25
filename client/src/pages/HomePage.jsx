import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero hero-stage">
        <div className="hero-copy-wrap">
          <p className="eyebrow">Ecommerce section ready</p>
          <h1>Move from starter website to a storefront with real app structure.</h1>
          <p className="hero-copy">
            Browse routed product pages, keep cart state in Redux Toolkit, and serve inventory from your backend instead of hardcoded HTML.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/products">
              Shop products
            </Link>
            <div className="status-pill">React Router + Redux Toolkit</div>
          </div>
        </div>

        <div className="scene-wrap" aria-hidden="true">
          <div className="scene-orbit scene-orbit-one"></div>
          <div className="scene-orbit scene-orbit-two"></div>
          <div className="scene-platform">
            <div className="scene-grid"></div>
            <div className="scene-shadow"></div>
            <div className="float-card float-card-main">
              <span className="float-label">Featured</span>
              <strong>North Arc Jacket</strong>
              <p>Rotating hero card with layered depth and motion.</p>
            </div>
            <div className="float-card float-card-side">
              <span className="float-label">Cart Sync</span>
              <strong>Redux Cart</strong>
              <p>Shared state updates across routed pages.</p>
            </div>
            <div className="float-cube">
              <div className="cube-face cube-front">M</div>
              <div className="cube-face cube-back">E</div>
              <div className="cube-face cube-right">R</div>
              <div className="cube-face cube-left">N</div>
              <div className="cube-face cube-top">API</div>
              <div className="cube-face cube-bottom">UI</div>
            </div>
            <div className="signal-ring signal-ring-one"></div>
            <div className="signal-ring signal-ring-two"></div>
          </div>
        </div>
      </section>

      <section className="stack-panel home-panel">
        <div>
          <p className="panel-label">What changed</p>
          <h2>Your frontend now behaves like an ecommerce app, not a static page.</h2>
        </div>
        <div className="panel-grid">
          <article>
            <h3>Routes</h3>
            <p>Separate screens for home, products, and cart using React Router.</p>
          </article>
          <article>
            <h3>Products API</h3>
            <p>Inventory comes from the backend, with seed data and Mongo-ready persistence.</p>
          </article>
          <article>
            <h3>Cart State</h3>
            <p>The cart button and cart page share the same Redux Toolkit state.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
