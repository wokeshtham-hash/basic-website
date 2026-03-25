import { Link } from "react-router-dom";

const serviceItems = [
  {
    title: "Worldwide delivery",
    copy: "Door-to-door shipping with careful packaging and tracked fulfillment."
  },
  {
    title: "Made in Nepal",
    copy: "Small-batch pieces with local manufacturing and cleaner production runs."
  },
  {
    title: "Exchange support",
    copy: "Straightforward help for damaged items and sizing issues after delivery."
  }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="service-band">
        {serviceItems.map((item) => (
          <article className="service-card" key={item.title}>
            <p className="service-kicker">{item.title}</p>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="footer-grid">
        <div className="footer-brand">
          <p className="footer-eyebrow">Starter Studio</p>
          <h2>Streetwear-inspired storefront with sharper editorial direction.</h2>
          <p>
            Built for a fashion catalog feel: stronger typography, cleaner contrast,
            and image-first merchandising across the home and shop routes.
          </p>
        </div>

        <div>
          <p className="footer-title">Shop</p>
          <div className="footer-links">
            <Link to="/products">Latest arrivals</Link>
            <Link to="/products">Outerwear</Link>
            <Link to="/products">Accessories</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>

        <div>
          <p className="footer-title">About</p>
          <div className="footer-copy">
            <p>Kathmandu, Nepal</p>
            <p>10:00 am - 7:00 pm Daily</p>
            <p>customercare@example.com</p>
          </div>
        </div>
      </section>

      <div className="footer-bottom">
        <p>© 2026 Starter Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
