import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { galleryImages } from '../data/gallery';

const Home = () => {
  return (
    <>
      <PageMeta
        title="The Vintage Cottage | Antique Shop in Pune"
        description="The Vintage Cottage is an antique shop in Pune buying and selling antiques. Explore the collection or contact the shop directly."
        path="/"
        image="/photos/general/2021-09-26(1).png"
      />
      <section className="hero" aria-labelledby="hero-title">
        <img src="/photos/general/2021-09-26(1).png" alt="Front of The Vintage Cottage antique shop in Pune" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Antique Shop in Pune</p>
          <h1 id="hero-title">The Vintage Cottage</h1>
          <p>Buying and selling antiques, vintage pieces and collectibles.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/gallery">Explore Collection</Link>
            <a className="button button-secondary" href="https://wa.me/918668945632" target="_blank" rel="noopener noreferrer">Contact on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-narrow">
          <p className="eyebrow">About the shop</p>
          <h2>An antique shop for distinctive vintage pieces</h2>
          <p>The Vintage Cottage is a Pune antique shop where customers can buy and sell antiques. The collection includes vintage and collectible pieces available to view at the shop.</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Collection</p>
            <h2>Selected photographs</h2>
          </div>
          <Link className="text-link" to="/gallery">View full collection</Link>
        </div>
        <div className="preview-grid">
          {galleryImages.slice(0, 6).map((image) => (
            <Link key={image.src} to="/gallery" className="image-card" aria-label="Open collection gallery">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section contact-preview">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Visit or get in touch</h2>
          <address>919 Synagogue Street, Pune, Maharashtra 411001, India</address>
          <p><a href="mailto:vintagecottage919@gmail.com">vintagecottage919@gmail.com</a></p>
          <p>Monday–Sunday, 10:00 AM–8:00 PM</p>
        </div>
        <Link className="button button-primary" to="/contact">Contact The Vintage Cottage</Link>
      </section>
    </>
  );
};

export default Home;
