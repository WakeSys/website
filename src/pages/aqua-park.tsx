import React, { useRef, useState } from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Paragraph, ParagraphAlignment } from '../components/paragraph/paragraph';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { SectionElement } from '../components/sectionElement/sectionElement';
import { IntroductionVisual } from '../components/introductionVisual/introductionVisual';
import { Button } from '../components/button/button';
import { Content } from '../components/content/content';
import { OwnerVisual, ProductType } from '../components/ownerVisual/ownerVisual';
import { AccordionFeatureListItem } from '../components/accordionFeatureListItem/accordionFeatureListItem';
import { FeatureList } from '../components/featureList/featureList';
import { IFeatureListItemProps } from '../components/featureListItem/featureListItem';

const styles = require('./Index.module.scss');

const HARDWARE_INSTALLATION: IFeatureListItemProps[] = [
  {
    label: 'iPads for registration and waiver signature'
  },
  {
    label: 'Touch PC for shop operations'
  },
  {
    label: 'Turnstiles for access control (optional)'
  },
  {
    label: 'Kitchen PC with order tracking (optional)'
  }
];

const IN_THE_SYSTEM: IFeatureListItemProps[] = [
  {
    label: 'Digitized operations including customer profile, waivers, tickets, shift reporting and invoicing'
  },
  {
    label: 'Group bookings & events'
  },
  {
    label: 'Mass cancellations and pro-rata ticket refund in case of bad weather or break-down'
  },
  {
    label: 'Branded gift cards '
  },
  {
    label: 'Detailed statistics and reports'
  },
  {
    label: 'Customer feedback evaluation '
  },
  {
    label: 'Support available 7 days a week'
  },
  {
    label: 'New features from season to season'
  }
];
const AquaPark: React.FunctionComponent = () => {
  const ownerNode = useRef<HTMLDivElement>(null);
  const staffNode = useRef<HTMLDivElement>(null);
  const customerNode = useRef<HTMLDivElement>(null);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const closeOverlay = () => setIsOverlayOpen(false);

  const openOverlay = () => setIsOverlayOpen(true);

  const scrollTo = node => {
    if (node) {
      const elementTop = node.current.offsetTop - 50;
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <BasicTemplate>
      <Header type={HeaderType.GREEN}>
        <Headline type="h1">Aqua Parks</Headline>
        <Paragraph isInverse isInHeader alignment={ParagraphAlignment.CENTER}>
          Aqua parks have special operations: Within a short time you need to bring a large amount of people on the water. With WakeSys you
          get fast passes allowing groups and individuals to check-in prior to arrival. Just like at the airport.
        </Paragraph>
        <Button onClick={openOverlay} buttonSize="big" label="Request free demo" buttonType="inverse" />
      </Header>
      <SectionWrapper className={styles.sectionIntroduction}>
        <div>
          <Headline type="topic">discover our features</Headline>
          <SectionElement
            onClick={() => scrollTo(ownerNode)}
            headline="For the Owner"
            description="Control and streamline your operations"
            type="owner"
          />
          <SectionElement
            onClick={() => scrollTo(staffNode)}
            headline="For your staff"
            description="Speed-up and optimize operations"
            type="staff"
          />
          <SectionElement
            onClick={() => scrollTo(customerNode)}
            headline="For your customers"
            description="Let them do most operations themselves"
            type="aquarpark"
          />
        </div>
        <IntroductionVisual />
      </SectionWrapper>
      <SectionWrapper className={styles.sectionOwner}>
        <div ref={ownerNode} />
        <Content size="40">
          <Headline type="h2">For the owner</Headline>
          <Paragraph>
            With WakeSys, we digitize your operations and save you precious time. All your data is only a few clicks away, at any time,
            wherever you are.
          </Paragraph>
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" />
        </Content>
        <OwnerVisual type={ProductType.AQUAPARK} />
      </SectionWrapper>
      <SectionWrapper alignment="column">
        <AccordionFeatureListItem label="HARDWARE INSTALLATION">
          <FeatureList featureList={HARDWARE_INSTALLATION} />
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" gutter />
        </AccordionFeatureListItem>
        <AccordionFeatureListItem label="In the system">
          <FeatureList featureList={IN_THE_SYSTEM} />
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" gutter />
        </AccordionFeatureListItem>
      </SectionWrapper>
    </BasicTemplate>
  );
};

export default AquaPark;
