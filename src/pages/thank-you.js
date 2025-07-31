import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const ThankYouPage = () => {
  return (
    <Layout>
      <Seo title="Thank You!" />
      <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <h1>Thank You!</h1>
        <p>Your message has been sent successfully. I will get back to you as soon as possible.</p>
        <Link to="/" style={{ /* ...some basic button styles... */ }}>
          Go back to Homepage
        </Link>
      </div>
    </Layout>
  );
};

export default ThankYouPage;