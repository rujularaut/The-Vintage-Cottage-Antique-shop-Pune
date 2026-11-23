import PageMeta from '../components/PageMeta';

const Contact = () => {
  const address = '919 Synagogue Street, Pune, Maharashtra 411001, India';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <>
      <PageMeta
        title="Contact Us | The Vintage Cottage"
        description="Contact The Vintage Cottage in Pune. Find our address, phone numbers, business hours and WhatsApp link."
        path="/contact"
        image="/photos/general/unnamed.jpg"
      />
      <section className="page-hero">
        <p className="eyebrow">Visit or get in touch</p>
        <h1>Contact Us</h1>
      </section>
      <section className="section contact-layout">
        <div className="contact-card">
          <p className="eyebrow">The Vintage Cottage</p>
          <h2>Address</h2>
          <address>{address}</address>
          <a className="button button-primary" href={mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
        <div className="contact-card">
          <h2>Phone</h2>
          <p><a href="tel:+918668945632">086689 45632</a></p>
          <h2 className="mt">Email</h2>
          <p><a href="mailto:vintagecottage919@gmail.com">vintagecottage919@gmail.com</a></p>
          <h2 className="mt">WhatsApp</h2>
          <a className="button button-secondary" href="https://wa.me/918668945632" target="_blank" rel="noopener noreferrer">Message 086689 45632</a>
        </div>
        <div className="contact-card">
          <h2>Business hours</h2>
          <p>Monday–Sunday</p>
          <p>10:00 AM–8:00 PM</p>
          <h2 className="mt">Instagram</h2>
          <a href="https://www.instagram.com/the_vintage_cottagee/" target="_blank" rel="noopener noreferrer">@the_vintage_cottagee</a>
        </div>
      </section>
    </>
  );
};

export default Contact;
