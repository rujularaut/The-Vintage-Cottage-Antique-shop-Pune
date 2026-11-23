import PageMeta from '../components/PageMeta';

const PrivacyPolicy = () => {
  return (
    <>
      <PageMeta
        title="Privacy Policy | The Vintage Cottage"
        description="Privacy information for The Vintage Cottage informational website."
        path="/privacy-policy"
      />
      <section className="page-hero">
        <p className="eyebrow">Information</p>
        <h1>Privacy Policy</h1>
      </section>
      <article className="policy">
        <p><strong>Last updated: 23 November 2026</strong></p>
        <h2>Who operates this website</h2>
        <p>The Vintage Cottage operates this informational website. The business is located at 919 Synagogue Street, Pune, Maharashtra 411001, India.</p>

        <h2>Information collected</h2>
        <p>This website does not include an online contact form, customer account, shopping cart, newsletter subscription or payment process. It does not intentionally collect personal information through the website.</p>
        <p>If you contact the business by telephone or WhatsApp, the information you choose to share is handled through that communication channel. WhatsApp is operated by Meta and is governed by its own privacy terms and practices.</p>

        <h2>Purpose of communication</h2>
        <p>Information shared by phone or WhatsApp is used to answer enquiries, discuss the collection and provide relevant information about visiting or contacting the shop.</p>

        <h2>External services and links</h2>
        <p>WhatsApp, Instagram and Google Maps open external services with their own privacy practices. This website does not control how those services collect or process data. The page styles also request font files from Google Fonts, whose service may receive ordinary technical request information.</p>

        <h2>Cookies and tracking</h2>
        <p>The website does not use analytics or advertising tracking tools. It does not set application cookies for accounts, shopping, newsletters or advertising. A hosting provider may process ordinary technical information necessary to deliver and secure the website. External services opened through links may set or process data according to their own policies.</p>

        <h2>Retention</h2>
        <p>This website does not have a database for visitor or customer records. Personal information contained in direct telephone or WhatsApp conversations is retained according to the business's ordinary communication practices; no website-specific retention period is stated.</p>

        <h2>Your choices and rights</h2>
        <p>You may choose not to use external communication links. For questions or requests relating to information shared with the business, contact The Vintage Cottage by telephone at <a href="tel:+918668945632">086689 45632</a>, by email at <a href="mailto:vintagecottage919@gmail.com">vintagecottage919@gmail.com</a>, or visit the shop at the address above.</p>

        <h2>Indian data protection</h2>
        <p>Any personal information you provide directly is handled subject to applicable Indian law, including the Digital Personal Data Protection Act, 2023, where applicable.</p>

        <h2>Updates</h2>
        <p>This policy may be updated when the website's actual data practices change.</p>
      </article>
    </>
  );
};

export default PrivacyPolicy;
