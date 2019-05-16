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
import { OwnerVisual } from '../components/ownerVisual/ownerVisual';
import { AccordionFeatureListItem } from '../components/accordionFeatureListItem/accordionFeatureListItem';
import { FeatureList } from '../components/featureList/featureList';
import { IFeatureListItemProps } from '../components/featureListItem/featureListItem';
import { StaffVisual } from '../components/staffVisual/staffVisual';
import { ProductType } from '../constants';
import { CustomerVisual } from '../components/customerVisual/customerVisual';
import { Overlay } from '../components/overlay/overlay';
import { ContactForm } from '../components/contactForm/contactForm';

const styles = require('./Index.module.scss');

const customerVisual = require('../components/assets/aqua-park-customer-visual.png');

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

const ONBOARDING: IFeatureListItemProps[] = [
  {
    label: 'Remote or onsite training prior to go live with test scenarios'
  },
  {
    label: 'Live support 7 days/week'
  }
];

const SELL_AND_REFUND: IFeatureListItemProps[] = [
  {
    label: 'Tickets'
  },
  {
    label: 'Rental equipment'
  },
  {
    label: 'Group bookings'
  },
  {
    label: 'Year passes & memberships'
  },
  {
    label: '10-packs & punch cards'
  },
  {
    label: 'Gift cards'
  },
  {
    label: 'Events'
  }
];

const MANAGE: IFeatureListItemProps[] = [
  {
    label: 'Group bookings via check-in onsite or fast pass'
  },
  {
    label: 'Events'
  },
  {
    label: 'Opening hours'
  },
  {
    label: 'Waivers'
  }
];

const VIEW: IFeatureListItemProps[] = [
  {
    label: 'Number of booked sessions per hour'
  },
  {
    label: 'Group bookings by date, booking code or name'
  },
  {
    label: 'Waiver validity'
  }
];

const AT_THE_KIOSK: IFeatureListItemProps[] = [
  {
    label: 'Sell shop items like clothing, equipment, food and beverages'
  },
  {
    label: 'Touch screen terminal to quickly select food and beverages'
  },
  {
    label: 'Edit all relevant product details such as retail price and applicable discounts '
  }
];

const ONLINE_OR_ON_THE_SPOT: IFeatureListItemProps[] = [
  {
    label: 'Register and receive customer account'
  },
  {
    label: 'View, book and pay tickets, group bookings and events'
  },
  {
    label: 'Sign waivers and accept terms & conditions'
  },
  {
    label: 'Invite group participants'
  },
  {
    label: 'Manage group bookings (replace or add participants)'
  },
  {
    label: 'Add minors or family members'
  },
  {
    label: 'Check-in groups to receive fast pass'
  },
  {
    label: 'Buy memberships, year passes, and 10-packs'
  },
  {
    label: 'Buy and redeem gift cards'
  },
  {
    label: 'Pay with credit card, PayPal, iDeal, Bancontact and prepaid'
  },
  {
    label: 'Use WakeSys in 7+ languages (EN,DE, FR, NL, ES, IT, PL, THAI)'
  },
  {
    label: 'Receive notification emails & feedback form'
  },
  {
    label: 'Responsive interface for smartphone, PC and tablet'
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
    <BasicTemplate
      title="WakeSys Aqua Parks - Online booking and management solutions for aqua parks"
      metaDescription="WakeSys Aqua Parks - With WakeSys we can help you to bring a large amount of people on the water with fast passes"
    >
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
      <div ref={staffNode} />
      <SectionWrapper className={styles.sectionStaff} withBackground fullWidth boxed>
        <Content size="60">
          <StaffVisual type={ProductType.AQUAPARK} />
        </Content>
        <Content size="40">
          <Headline type="h2">For the staff</Headline>
          <Paragraph>
            Your customer is at the heart of our system. 95% of the most common operations are available within one click in our intuitive
            and easy-to-use interface any staff member can handle.
          </Paragraph>
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" gutter />
        </Content>
        <AccordionFeatureListItem label="Onboarding">
          <FeatureList featureList={ONBOARDING} />
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" gutter />
        </AccordionFeatureListItem>
        <AccordionFeatureListItem label="At the cash register">
          <Headline type="h5">Sell and refund:</Headline>
          <FeatureList featureList={SELL_AND_REFUND} />
          <Headline type="h5">Manage:</Headline>
          <FeatureList featureList={MANAGE} />
          <Headline type="h5">View:</Headline>
          <FeatureList featureList={VIEW} />
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" gutter />
        </AccordionFeatureListItem>
        <AccordionFeatureListItem label="At the kiosk">
          <FeatureList featureList={AT_THE_KIOSK} />
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" gutter />
        </AccordionFeatureListItem>
      </SectionWrapper>
      <SectionWrapper>
        <div ref={customerNode} />
        <Content size="40">
          <Headline type="h2">For your customers</Headline>
          <Paragraph>
            Hosting a party at your favorite aqua park and not in the mood for organizing back and forth with your friends? With WakeSys,
            you book the desired amount of participants and each participant signs up individually via an email link. Boom!
          </Paragraph>
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" />
        </Content>
        <Content size="40">
          <CustomerVisual imageUrl={customerVisual} />
        </Content>
      </SectionWrapper>
      <SectionWrapper alignment="column">
        <AccordionFeatureListItem label="Online or on the spot">
          <FeatureList featureList={ONLINE_OR_ON_THE_SPOT} />
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" gutter />
        </AccordionFeatureListItem>
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
      {isOverlayOpen && <Overlay children={<ContactForm />} onCloseClick={closeOverlay} />}
    </BasicTemplate>
  );
};

export default AquaPark;
