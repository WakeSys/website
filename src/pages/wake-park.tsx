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
            <div ref={this.ownerNode} />
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
        {/* <SectionWrapper className={styles.sectionStaff}>
          <StaffVisual />
          <div ref={this.staffNode} className={styles.content}>
            <Headline type="h2">For the staff</Headline>
            <AccordionFeatureListItem label="At the Pro-Shop" featureList={featureList} />
            <AccordionFeatureListItem label="At the Kiosk" featureList={featureList} />
            <AccordionFeatureListItem label="At the cash register" featureList={featureList} />
            <AccordionFeatureListItem label="At the rental equipment" featureList={featureList} />
            <AccordionFeatureListItem
              className={styles.indexAccordionFeatureListItem}
              label="At the starting dock"
              featureList={featureList}
            />
            <Button onClick={this.openOverlay} label="Get in touch" />
          </div>
        </SectionWrapper>
        <SectionWrapper className={styles.sectionCustomer}>
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
