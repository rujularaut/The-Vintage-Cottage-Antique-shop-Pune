import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const NotFound = () => (
  <>
    <PageMeta title="Page Not Found | The Vintage Cottage" description="The requested page could not be found." path="/404" />
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="button button-primary" to="/">Return home</Link>
    </section>
  </>
);

export default NotFound;
