import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const PageMeta = ({ title, description, path, image = '/photos/products/2024-08-02 (1).jpg' }: PageMetaProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const canonicalUrl = `https://vintagecottage.store${path}`;
    const imageUrl = `https://vintagecottage.store${image}`;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [title, description, path, image]);

  return null;
};

export default PageMeta;
