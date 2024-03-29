import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Button } from '../components/button/button';
import { Paragraph, ParagraphAlignment } from '../components/paragraph/paragraph';
import { SectionElement } from '../components/sectionElement/sectionElement';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { IntroductionVisual } from '../components/introductionVisual/introductionVisual';
import { OwnerVisual } from '../components/ownerVisual/ownerVisual';
import { FeatureList } from '../components/featureList/featureList';
import { IFeatureListItemProps } from '../components/featureListItem/featureListItem';
import { AccordionFeatureListItem } from '../components/accordionFeatureListItem/accordionFeatureListItem';
import { StaffVisual } from '../components/staffVisual/staffVisual';
import { Overlay } from '../components/overlay/overlay';
import { ContactForm } from '../components/contactForm/contactForm';
import { Content } from '../components/content/content';
import { ReferenceTileList } from '../components/referenceTile/referenceTileList';
import { ProductType } from '../constants';

const area47 = require('../components/assets/references/area47.png');
const wakeparadise = require('../components/assets/references/wakeparadise.png');
const liquidleisure = require('../components/assets/references/liquidleisure.png');
const customerVisual = require('../components/assets/wakepark-customer-visual.jpg');

const styles = require('./Index.module.scss');

const HARDWARE_INSTALLATION: IFeatureListItemProps[] = [
  {
    label: 'iPads for registration and waiver signature'
  },
  {
    label: 'Touch PC for shop operations'
  },
  {
    label: 'Scanner and operator screen at starting dock'
  },
  {
    label: 'Turnstiles for access control (optional)'
  },
  {
    label: 'Kitchen PC with order tracking (optional)'
  },
  {
    label: 'Payment devices for payments with prepaid (optional)'
  }
];

const IN_THE_SYSTEM: IFeatureListItemProps[] = [
  {
    label: 'Digitized operations including customer profile, waivers, tickets, shift reporting and invoicing'
  },
  {
    label: 'RFID access control'
  },
  {
    label: 'Cable tracking & cable maintenance'
  },
  {
    label: 'Mass cancellations and pro-rata ticket refund in case of bad weather or cable break-down'
  },
  {
    label: 'Lake rentals & events'
  },
  {
    label: 'Branded gift cards'
  },
  {
    label: 'Branded RFID wristbands'
  },
  {
    label: 'Detailed statistics and reports'
  },
  {
    label: 'Customer feedback evaluation'
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
    label: 'Onsite training prior to go live with test scenarios'
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
  },
  {
    label: 'Group bookings'
  },
  {
    label: 'RFID wristbands'
  },
  {
    label: 'Prepaid credit (optional)'
  }
];

const MANAGE: IFeatureListItemProps[] = [
  {
    label: 'Events'
  },
  {
    label: 'Group bookings'
  },
  {
    label: 'Opening hours'
  },
  {
    label: 'Waivers'
  }
];

const AT_THE_KIOSK: IFeatureListItemProps[] = [
  {
    label: 'Sell shop items like clothing, equipment, food and beverages'
  },
  {
    label: 'RFID wristband integration for payment'
  },
  {
    label: 'Touch screen terminal to quickly select food and beverages'
  },
  {
    label: 'Manage products with refundable deposit'
  },
  {
    label: 'Edit all relevant product details such as retail price and applicable discounts'
  }
];

const AT_THE_RENTAL_EQUIPMENT_HANDOUT: IFeatureListItemProps[] = [
  {
    label: 'RFID wristband integration'
  },
  {
    label: 'Rental equipment status (booked/available)'
  },
  {
    label: 'Know which customer has which equipment'
  },
  {
    label: 'Know which equipment was not given back'
  },
  {
    label: 'Know which customer used which material, and use this information for marketing purposes'
  },
  {
    label: 'Detailed customer information: Name, age, profile picture, waiver validity, etc.'
  }
];

const AT_THE_STARTING_DOCK: IFeatureListItemProps[] = [
  {
    label: 'Customer information every time a customer touches the RFID reader'
  },
  {
    label: 'See who currently is on the water and who has a ticket but has not started riding yet'
  },
  {
    label: 'Lap counter and lap limit'
  },
  {
    label: 'Pause all tickets when the cable is stopped for maintenance'
  }
];

const ONLINE_OR_ON_THE_SPOT: IFeatureListItemProps[] = [
  {
    label: 'Register and receive customer account '
  },
  {
    label: 'View, book and pay tickets, group bookings and events'
  },
  {
    label: 'Sign waivers and accept terms & conditions'
  },
  {
    label: 'Invite group participants and manage the booking'
  },
  {
    label: 'Add minors and family members'
  },
  {
    label: 'Check-in groups for fast pass'
  },
  {
    label: 'Buy memberships, year passes, and 10-packs'
  },
  {
    label: 'Buy and redeem gift cards'
  },
  {
    label: 'Add prepaid credit'
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

const REFERENCES = [
  {
    imageUrl: liquidleisure,
    altAttribute: 'liquid leisure - logo',
    youtubeId: 'UQOQeJFnkh0'
  },
  {
    imageUrl: wakeparadise,
    altAttribute: 'wakeparadise - logo',
    youtubeId: 'xU9Xz-DPxhQ'
  },
  {
    imageUrl: area47,
    altAttribute: 'area47 - logo',
    youtubeId: 'A6GOvi84so0'
  }
];

interface IIndexPage {
  isOverlayOpen: boolean;
}

export default class IndexPage extends React.Component<{}, IIndexPage> {
  public state: IIndexPage = { isOverlayOpen: false };

  public ownerNode = React.createRef<HTMLDivElement>();
  private staffNode = React.createRef<HTMLDivElement>();
  private customerNode = React.createRef<HTMLDivElement>();

  public render() {
    return (
      <BasicTemplate
        title="WakeSys Wake Parks - Online booking and management solutions for wakeboard cable parks"
        metaDescription="WakeSys Wake Parks - We provide a oftware solution to automate, track and simplify operations for wakeboard cable parks"
      >
        <Header className={styles.test} type={HeaderType.BLUE}>
          <Headline type="h1">WakeSys for Wake Parks</Headline>
          <Paragraph isInverse isInHeader alignment={ParagraphAlignment.CENTER}>
            WakeSys enterprise software is made for full-size and two-tower wake parks. Access control, waiver management, lake rentals and
            cable tracking are just a few of our key features.
          </Paragraph>
          <Button onClick={this.openOverlay} buttonSize="big" label="Request free demo" buttonType="inverse" />
        </Header>
        <SectionWrapper className={styles.sectionIntroduction}>
          <div>
            <Headline type="topic">discover our features</Headline>
            <SectionElement
              onClick={() => this.scrollTo(this.ownerNode)}
              headline="For the Owner"
              description="Control and streamline your operations"
              type="owner"
            />
            <SectionElement
              onClick={() => this.scrollTo(this.staffNode)}
              headline="For your staff"
              description="Speed-up and optimize operations"
              type="staff"
            />
            <SectionElement
              onClick={() => this.scrollTo(this.customerNode)}
              headline="For your customers"
              description="Let them do most operations themselves"
              type="wakepark"
            />
          </div>
          <IntroductionVisual tickets="$ 2000" label="Memberships: $ 549,00" total="$ 2549,00" />
        </SectionWrapper>
        <SectionWrapper className={styles.sectionOwner}>
          <div ref={this.ownerNode} />
          <Content size="40">
            <Headline type="h2">For the owner</Headline>
            <Paragraph>
              With WakeSys, we digitize your operations and save you precious time. All your data is only a few clicks away, at any time,
              wherever you are.
            </Paragraph>
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" />
          </Content>
          <OwnerVisual type={ProductType.WAKEPARK} />
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <AccordionFeatureListItem label="HARDWARE INSTALLED FOR YOU">
            <FeatureList featureList={HARDWARE_INSTALLATION} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="In the system">
            <FeatureList featureList={IN_THE_SYSTEM} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
        </SectionWrapper>
        <div ref={this.staffNode} />
        <SectionWrapper className={styles.sectionStaff} withBackground fullWidth boxed>
          <Content size="60">
            <StaffVisual type={ProductType.WAKEPARK} />
          </Content>
          <Content size="40">
            <Headline type="h2">For the staff</Headline>
            <Paragraph>
              Your customer is at the heart of our system. 95% of the most common operations are available within one click in our intuitive
              and easy-to-use interface any staff member can handle.
            </Paragraph>
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </Content>
          <AccordionFeatureListItem label="Onboarding">
            <FeatureList featureList={ONBOARDING} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="At the cash register">
            <Headline type="h5">Sell and refund:</Headline>
            <FeatureList featureList={SELL_AND_REFUND} />
            <Headline type="h5">Manage:</Headline>
            <FeatureList featureList={MANAGE} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="At the kiosk">
            <FeatureList featureList={AT_THE_KIOSK} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="At the rental equiptment handout">
            <FeatureList featureList={AT_THE_RENTAL_EQUIPMENT_HANDOUT} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="At the starting dock">
            <FeatureList featureList={AT_THE_STARTING_DOCK} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
        </SectionWrapper>
        <div ref={this.customerNode} />
        <SectionWrapper fullWidth alignment="column" visual={customerVisual}>
          <Content size="100" alignment="center" minHeight smallWidth>
            <Headline inverse type="h2">
              For your customers
            </Headline>
            <Paragraph isInverse alignment={ParagraphAlignment.CENTER}>
              Let your customers book and manage their bookings the most convenient and fastest way possible with all data available on the
              go from their smartphones.
            </Paragraph>
            <Button buttonType="inverse" label="Get in touch" />
          </Content>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <AccordionFeatureListItem label="Online or on the spot">
            <FeatureList featureList={ONLINE_OR_ON_THE_SPOT} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
        </SectionWrapper>

        <SectionWrapper alignment="column">
          <Headline type="h2" alignment="center">
            Some of our world wide customers
          </Headline>
          <Headline type="h3" alignment="center">
            The ideal solution for wake parks of any size
          </Headline>
          <ReferenceTileList reference={REFERENCES} />
        </SectionWrapper>

        <SectionWrapper fullWidth withBackground>
          <Content size="100" alignment="center">
            <Headline type="h2" alignment="center">
              Ready to get WakeSys at your park?
            </Headline>
            <Paragraph alignment={ParagraphAlignment.CENTER}>request your free demo and guided walk-through today!</Paragraph>
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" />
          </Content>
        </SectionWrapper>

        {this.state.isOverlayOpen && (
          <Overlay className={styles.contactFormOverlay} children={<ContactForm />} onCloseClick={this.closeOverlay} />
        )}
      </BasicTemplate>
    );
  }

  private closeOverlay = () => {
    this.setState({
      isOverlayOpen: false
    });
  };

  private openOverlay = () => {
    this.setState({
      isOverlayOpen: true
    });
  };

  private scrollTo = node => {
    if (node) {
      const elementTop = node.current.offsetTop - 50;
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };
}
