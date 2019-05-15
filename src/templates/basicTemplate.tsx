import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { TopBar } from '../components/topBar/topBar';
import { Overlay } from '../components/overlay/overlay';
import { Footer } from '../components/footer/footer';
import { ContactForm } from '../components/contactForm/contactForm';
import { Route } from '../constants';

const styles = require('./basicTemplate.module.scss');

interface Props {
  title?: string;
  metaDescription?: string;
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

const NAVIGATION_LIST = [
  {
    label: 'Wakeboard Parks',
    to: Route.WAKEPARK
  },
  {
    label: 'Aqua Parks',
    to: Route.AQUAPARK
  },
  {
    label: 'Surf Parks',
    to: Route.SURFPARK
  }
];

export const BasicTemplate: React.FunctionComponent<Props> = ({ children, title, metaDescription }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <Helmet title={title} meta={[{ name: 'description', content: metaDescription }]} />
      <TopBar navigationList={NAVIGATION_LIST} label="Free trial" openOverlay={() => setIsOverlayOpen(true)} />
      {isOverlayOpen && (
        <Overlay className={styles.basicTemplateOverlay} children={<ContactForm />} onCloseClick={() => setIsOverlayOpen(false)} />
      )}
      {children}
      <Footer />
    </>
  );
};
