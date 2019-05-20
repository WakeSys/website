import React, { useState } from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderAlignment } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Paragraph, ParagraphAlignment } from '../components/paragraph/paragraph';
import { Button } from '../components/button/button';
import { TrustSection, Items } from '../components/trustSection/trustSection';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { ProductCard, Color } from '../components/productCard/productCard';
import { Route } from '../constants';
import { ReferenceTileList } from '../components/referenceTile/referenceTileList';
import { TileList } from '../components/tileList/tileList';
import { Content } from '../components/content/content';
import { Overlay } from '../components/overlay/overlay';
import { ContactForm } from '../components/contactForm/contactForm';

const styles = require('./Index.module.scss');

const startpageVisual = require('../components/assets/startpage-visual.jpg');
const partnerRixen = require('../components/assets/partner-rixen-logo.png');
const partnerSesitec = require('../components/assets/partner-sesitec-logo.png');
const partnerWakeParx = require('../components/assets/partner-wakeparx-logo.png');
const partnerWakeStation = require('../components/assets/partner-wakestation-logo.png');
const aboutUsVisual = require('../components/assets/startpage-wave-visual.png');

const wakeparadise = require('../components/assets/references/wakeparadise.png');
const liquidleisure = require('../components/assets/references/liquidleisure.png');
const area47 = require('../components/assets/references/area47.png');

const partners: Items[] = [
  {
    imageUrl: partnerRixen as string,
    altAttr: 'Rixen logo'
  },
  {
    imageUrl: partnerSesitec as string,
    altAttr: 'Sesitec logo'
  },
  {
    imageUrl: partnerWakeParx as string,
    altAttr: 'WakeParx logo'
  },
  {
    imageUrl: partnerWakeStation as string,
    altAttr: 'WakeStation logo'
  }
];

const REFERENCES = [
  {
    imageUrl: liquidleisure,
    altAttribute: 'liquid leisure - logo',
    youtubeId: 'UQOQeJFnkh0'
  },
  {
    imageUrl: wakeparadise,
    altAttribute: 'wakeparadise - logo',
    youtubeId: 'UQOQeJFnkh0'
  },
  {
    imageUrl: area47,
    altAttribute: 'area47 - logo',
    youtubeId: 'A6GOvi84so0'
  }
];

const IndexPage: React.FunctionComponent = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const closeOverlay = () => setIsOverlayOpen(false);
  const openOverlay = () => setIsOverlayOpen(true);

  return (
    <BasicTemplate
      title="WakeSys is an enterprise software - we provide a solution for wake parks, aqua parks and surf parks"
      metaDescription="WakeSys -  integrated online booking tailor-made for parks in the water sports industry, wanting to automate, track and simplify their operations"
    >
      <Header className={styles.header} backgroundImage={startpageVisual} alignment={HeaderAlignment.LEFT}>
        <Headline className={styles.headline} type="h1">
          WakeSys is an
          <br /> enterprise software
        </Headline>
        <Paragraph isInHeader isInverse>
          with integrated online booking tailor-made for parks in the water sports industry, wanting to automate, track and simplify their
          operations.
        </Paragraph>
        <Button onClick={() => setIsOverlayOpen(true)} buttonSize="big" label="Request free demo" buttonType="inverse" />
      </Header>
      <TrustSection label="Our partners:" items={partners} />
      <SectionWrapper alignment="column">
        <Headline type="h2" alignment="center" noMargin>
          Discover our products
        </Headline>
        <Headline type="h3" alignment="center">
          The ideal solution for water sports and outdoor parks of any size
        </Headline>
        <TileList>
          <ProductCard link={Route.WAKEPARK} productType={Color.BLUE} productName="Wake Parks" />
          <ProductCard link={Route.AQUAPARK} productType={Color.GREEN} productName="Aqua Parks" />
          <ProductCard link={Route.SURFPARK} productType={Color.PURPLE} productName="Surf Parks" />
        </TileList>
      </SectionWrapper>
      <SectionWrapper fullWidth alignment="column" visual={aboutUsVisual}>
        <Content size="100" alignment="center" smallWidth minHeight>
          <Headline inverse type="h2">
            What is the product about?
          </Headline>
          <Paragraph isInverse alignment={ParagraphAlignment.CENTER}>
            WakeSys makes your business run smoothly: We provide an end-to-end solution with dedicated interfaces for the owner, the staff
            members and the customers digitizing all your operations. Buy tickets, sign waivers, manage group bookings, setup up events and
            manage customer profiles 24/7 from your preferred device.
          </Paragraph>
          <Button onClick={() => setIsOverlayOpen(true)} buttonType="inverse" label="Request free demo" />
        </Content>
      </SectionWrapper>
      <SectionWrapper alignment="column">
        <Headline type="h2" alignment="center">
          Some of our world wide customers
        </Headline>
        <Headline type="h3" alignment="center">
          Used by the finest wake parks, aqua parks and surf parks in the world
        </Headline>
        <ReferenceTileList reference={REFERENCES} />
      </SectionWrapper>
      <SectionWrapper fullWidth withBackground>
        <Content size="100" alignment="center">
          <Headline type="h2" alignment="center">
            Ready to get WakeSys at your park?
          </Headline>
          <Paragraph alignment={ParagraphAlignment.CENTER}>request your free demo and guided walk-through today!</Paragraph>
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" />
        </Content>
      </SectionWrapper>
      {isOverlayOpen && <Overlay className={styles.contactFormOverlay} children={<ContactForm />} onCloseClick={closeOverlay} />}
    </BasicTemplate>
  );
};

export default IndexPage;
