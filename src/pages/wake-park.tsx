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
import { CustomerVisual } from '../components/customerVisual/customerVisual';
import { UserStoriesTeaser } from '../components/userStoriesTeaser/userStoriesTeaser';
import { Overlay } from '../components/overlay/overlay';
import { ContactForm } from '../components/contactForm/contactForm';
import { GridItem } from '../components/grid/gridItem';
import { Grid } from '../components/grid/grid';
import { Content } from '../components/content/content';

const area47Logo = require('../components/assets/area47.png');
const twpLogo = require('../components/assets/twp.png');
const liquidLeisureLogo = require('../components/assets/liquid-leisure.png');

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
    label: 'Lake rentals & events'
  },
  {
    label: 'Branded gift cards & RFID wristbands'
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
    label: 'Facebook exchange group for live support'
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
    label: 'RFID wristband integration'
  },
  {
    label: 'Touch screen terminal to quickly select food and beverages'
  },
  {
    label: 'Compatible with different taxes for take-away / to eat at the location'
  },
  {
    label: 'Manage products with refundable deposit'
  },
  {
    label: 'Edit all relevant product details, such as the retail price and the maximum discountable amount'
  }
];

const AT_THE_RENTAL_EQUIPMENT_HANDOUT: IFeatureListItemProps[] = [
  {
    label: 'RFID wristband integration'
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
  },
  {
    label: 'Rental equipment status (booked/available)'
  }
];

const AT_THE_STARTING_DOCK: IFeatureListItemProps[] = [
  {
    label: 'Detailed customer information every time a customer touches the RFID reader'
  },
  {
    label: 'Lap counter and lap limit'
  },
  {
    label: 'Pause all tickets when the cable is stopped for maintenance'
  },
  {
    label: 'Overview of all customers with a membership'
  },
  {
    label:
      'Overview of all customers that are currently on the water and  all customers that already have a ticket but have not started riding yet'
  }
];

const REFERENCES = [
  {
    imageUrl: liquidLeisureLogo,
    altAttribute: 'liquid leisure - logo',
    youtubeId: 'BsuGRTDEUGM'
  },
  {
    imageUrl: twpLogo,
    altAttribute: 'bal',
    youtubeId: 'BsuGRTDEUGM'
  },
  {
    imageUrl: area47Logo,
    altAttribute: 'area47 - logo',
    youtubeId: 'BsuGRTDEUGM'
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
      <BasicTemplate>
        <Header className={styles.test} type={HeaderType.BLUE}>
          <Headline type="h1">WakeSys for Wake Parks</Headline>
          <Paragraph className={styles.headerParagraph} isInverse isInHeader alignment={ParagraphAlignment.CENTER}>
            WakeSys is an enterprise software with an integrated online booking tool and point-of-sale system, tailor-made for wakeboard
            cable parks wanting to automate, track and simplify their operations.
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
          <IntroductionVisual />
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
          <OwnerVisual />
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <AccordionFeatureListItem label="HARDWARE INSTALLATION">
            <FeatureList featureList={HARDWARE_INSTALLATION} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
          <AccordionFeatureListItem label="In the system">
            <FeatureList featureList={IN_THE_SYSTEM} />
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </AccordionFeatureListItem>
        </SectionWrapper>
        <SectionWrapper className={styles.sectionStaff} withBackground fullWidth boxed>
          <Content size="60">
            <StaffVisual />
          </Content>
          <Content size="40">
            <div ref={this.staffNode} />
            <Headline type="h2">For the staff</Headline>
            <Paragraph>
              Your customer is at the heart of our system. 95% of the most common operations are available within one click in our intuitive
              and easy-to-use interface any staff member can handle.
            </Paragraph>
            <Button onClick={this.openOverlay} label="Get in touch" buttonType="primary" gutter />
          </Content>
          <Content size="80" />
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
        {/* <SectionWrapper alignment="column" withBackground fullWidth>
          
        </SectionWrapper> */}
        {/* <SectionWrapper className={styles.sectionCustomer}>
          <div ref={this.customerNode} className={styles.content}>
            <Headline type="h2">For your customers</Headline>
            <FeatureList featureList={featureList} />
            <Button onClick={this.openOverlay} label="Get in touch" />
          </div>
          <CustomerVisual />
        </SectionWrapper>
        <UserStoriesTeaser
          headline="Some of our world-wide customers"
          subHeadline="The ideal solution for wakeboard cable parks of any size"
          reference={REFERENCES}
        />
        <SectionWrapper fullWidth className={styles.sectionUpgrade}>
          <Headline className={styles.sectionUpgradeHeadline} type="h2">
            Ready to get WakeSys at your park?
          </Headline>
          <Headline className={styles.sectionUpgradeSubHeadline} type="h3">
            request your free demo and guided walk-through today!
          </Headline>
          <Button onClick={this.openOverlay} label="Get in touch" />
        </SectionWrapper> */}
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
