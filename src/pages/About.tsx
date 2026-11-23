import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const About = () => {
  return (
    <>
      <PageMeta
        title="About Us | The Vintage Cottage"
        description="Learn about The Vintage Cottage, an antique shop in Pune that buys and sells antiques."
        path="/about"
        image="/photos/general/unnamed.jpg"
      />
      <section className="page-hero">
        <p className="eyebrow">Pune, Maharashtra</p>
        <h1>About Us</h1>
      </section>
      <section className="section about-layout">
        <div className="about-image">
          <img src="/photos/general/unnamed.jpg" alt="Exterior of The Vintage Cottage in Pune" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">The Vintage Cottage</p>
          <h2>An antique shop for vintage and collectible pieces</h2>
          <p>The Vintage Cottage is an antique shop in Pune. Our business activity includes buying and selling antiques.</p>
          <p>Photographs of our collection are available on this website. Visit the shop or contact us directly to enquire about items and current availability.</p>
          <Link className="button button-primary" to="/contact">Contact the shop</Link>
        </div>
      </section>
    </>
  );
};

export default About;
