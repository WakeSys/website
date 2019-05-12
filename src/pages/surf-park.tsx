import React, { useRef, useState } from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Paragraph, ParagraphAlignment } from '../components/paragraph/paragraph';
import { Button } from '../components/button/button';
import { Overlay } from '../components/overlay/overlay';
import { ContactForm } from '../components/contactForm/contactForm';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { SectionElement } from '../components/sectionElement/sectionElement';
import { IntroductionVisual } from '../components/introductionVisual/introductionVisual';
import { Content } from '../components/content/content';
import { OwnerVisual } from '../components/ownerVisual/ownerVisual';
import { ProductType } from '../constants';
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

const SurfPark: React.FunctionComponent = () => {
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
      <Header type={HeaderType.PURPLE}>
        <Headline type="h1">Surf Parks</Headline>
        <Paragraph isInverse isInHeader alignment={ParagraphAlignment.CENTER}>
          Want to get the best out of your surf park’s capacity? We have a flawless solution for you that lets your customers book and ride
          in timed slots!
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
            type="surfpark"
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
        <OwnerVisual type={ProductType.SURFPARK} />
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
      {isOverlayOpen && <Overlay children={<ContactForm />} onCloseClick={closeOverlay} />}
    </BasicTemplate>
  );
};

export default SurfPark;
