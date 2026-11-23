import { useEffect, useState } from 'react';
import PageMeta from '../components/PageMeta';
import { galleryImages } from '../data/gallery';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedIndex]);

  return (
    <>
      <PageMeta
        title="Collection | The Vintage Cottage"
        description="View photographs of antique and vintage pieces at The Vintage Cottage, Pune."
        path="/gallery"
        image="/photos/products/2024-08-02 (1).jpg"
      />
      <section className="page-hero">
        <p className="eyebrow">The Vintage Cottage</p>
        <h1>Collection</h1>
      </section>
      <section className="section">
        <p className="gallery-note">For enquiries about items in our collection, please contact us directly by phone or WhatsApp.</p>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              className="gallery-item"
              key={image.src}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Preview image ${index + 1}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </section>
      {selectedIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setSelectedIndex(null)}>
          <button type="button" className="lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Close image preview">Close</button>
          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
