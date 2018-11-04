import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Button } from '../components/button/button';
import { Paragraph } from '../components/paragraph/paragraph';
import { SectionElement } from '../components/sectionElement/sectionElement';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { IntroductionVisual } from '../components/introductionVisual/introductionVisual';
import { StaffVisual } from '../components/staffVisual/staffVisual';
import { FeatureList } from '../components/featureList/featureList';
import { IFeatureListItemProps } from '../components/featureListItem/featureListItem';
import { AccordionFeatureListItem } from '../components/accordionFeatureListItem/accordionFeatureListItem';

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

export default class IndexPage extends React.Component {
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
          <Button buttonSize="big" label="Request free demo" />
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
            <Button label="Get in touch" />
          </div>
          <StaffVisual />
        </SectionWrapper>
        <SectionWrapper className={styles.sectionOwner}>
          <div>visual</div>
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
            <Button label="Get in touch" />
          </div>
        </SectionWrapper>
      </BasicTemplate>
    );
  }
}
