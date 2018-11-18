import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Button } from '../components/button/button';
import { Paragraph } from '../components/paragraph/paragraph';
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

const area47Logo = require('../components/assets/area47.png');
const twpLogo = require('../components/assets/twp.png');
const liquidLeisureLogo = require('../components/assets/liquid-leisure.png');

const styles = require('./Index.module.scss');

const featureList: IFeatureListItemProps[] = [
  {
    label: 'Modular cable park solution'
  },
  {
    label: 'Support available 7 days a week'
  },
  {
    label: 'Automated processes and operations'
  },
  {
    label: 'Automated invoicing'
  },
  {
    label: 'Automated retargeting'
  },
  {
    label: 'RFID access control'
  },
  {
    label: 'Staff control'
  },
  {
    label: 'Detailed statistics'
  },
  {
    label: 'Customization'
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
  public render() {
    return (
      <BasicTemplate>
        <Header className={styles.test}>
          <Headline type="h1">Full-Size</Headline>
          <Headline className={styles.subhealine} type="h3">
            <span>wake</span>
            sys innovative software development
          </Headline>
          <Paragraph className={styles.headerParagraph}>
            WakeSys is an enterprise software with an integrated online booking tool and point-of-sale system, tailor-made for wakeboard
            cable parks wanting to automate, track and simplify their operations.
          </Paragraph>
          <Button onClick={this.openOverlay} buttonSize="big" label="Request free demo" />
        </Header>
        <SectionWrapper className={styles.sectionIntroduction}>
          <div>
            <Headline type="topic">discover our features</Headline>
            <SectionElement headline="For the Owner" description="Control and streamline your operations" type="owner" />
            <SectionElement headline="For your staff" description="Speed-up and optimize operations" type="staff" />
            <SectionElement headline="For your customers" description="Let them do most operations themselves" type="customer" />
          </div>
          <IntroductionVisual />
        </SectionWrapper>
        <SectionWrapper className={styles.sectionOwner}>
          <div className={styles.content}>
            <Headline type="h2">For the owner</Headline>
            <FeatureList featureList={featureList} />
            <Button onClick={this.openOverlay} label="Get in touch" />
          </div>
          <OwnerVisual />
        </SectionWrapper>
        <SectionWrapper className={styles.sectionStaff}>
          <StaffVisual />
          <div className={styles.content}>
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
          <div className={styles.content}>
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
        </SectionWrapper>
        {this.state.isOverlayOpen && <Overlay children={<div>swag all day</div>} onCloseClick={this.closeOverlay} />}
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
}
