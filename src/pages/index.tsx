import React, { useState } from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderAlignment } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Paragraph } from '../components/paragraph/paragraph';
import { Button } from '../components/button/button';
import { TrustSection, Items } from '../components/trustSection/trustSection';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { ProductCard, Color } from '../components/productCard/productCard';
import { Grid } from '../components/grid/grid';
import { GridItem } from '../components/grid/gridItem';
import { Route } from '../constants';
import { VisualSection } from '../components/visualSection/visualSection';

const styles = require('./Index.module.scss');

const startpageVisual = require('../components/assets/startpage-visual.png');
const partnerRixen = require('../components/assets/partner-rixen-logo.png');
const partnerSesitec = require('../components/assets/partner-sesitec-logo.png');
const partnerWakeParx = require('../components/assets/partner-wakeparx-logo.png');
const partnerWakeStation = require('../components/assets/partner-wakestation-logo.png');
const aboutUsVisual = require('../components/assets/startpage-wave-visual.png');

const partners: Items[] = [
  {
    imageUrl: partnerSesitec as string,
    altAttr: 'Sesitec logo'
  },
  {
    imageUrl: partnerRixen as string,
    altAttr: 'Rixen logo'
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

const IndexPage: React.FunctionComponent = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <BasicTemplate>
      <Header className={styles.header} backgroundImage={startpageVisual} alignment={HeaderAlignment.LEFT}>
        <Headline className={styles.headline} type="h1">
          WakeSys is an
          <br /> enterprise software
        </Headline>
        <Paragraph isInHeader isInverse>
          with integrated online booking tailor-made for parks in the watersports industry, wanting to automate, track and simplify their
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
          The ideal solution for watersports and outdoor parks of any size
        </Headline>
        <Grid>
          <GridItem start={1} span={4}>
            <ProductCard link={Route.WAKEPARK} productType={Color.BLUE} productName="Wake Parks" />
          </GridItem>
          <GridItem start={5} span={4}>
            <ProductCard link={Route.AQUAPARK} productType={Color.GREEN} productName="Aqua Parks" />
          </GridItem>
          <GridItem start={9} span={4}>
            <ProductCard link={Route.SURFPARK} productType={Color.PURPLE} productName="Surf Parks" />
          </GridItem>
        </Grid>
      </SectionWrapper>
      <SectionWrapper fullWidth alignment="column">
        <VisualSection visual={aboutUsVisual}>
          <Headline inverse type="h2">
            What is the product about?
          </Headline>
          <Paragraph isInverse>
            WakeSys makes your business run smoothly: We provide an end-to-end solution with dedicated interfaces for the owner, the staff
            members and the customers digitizing all your operations. Buy tickets, sign waivers, manage group bookings, setup up events and
            manage customer profiles 24/7 from your preferred device.
          </Paragraph>
          <Button buttonType="inverse" label="Request free demo" />
        </VisualSection>
      </SectionWrapper>
    </BasicTemplate>
  );
};

export default IndexPage;
