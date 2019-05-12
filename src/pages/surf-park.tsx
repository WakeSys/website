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

const styles = require('./Index.module.scss');

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
      {isOverlayOpen && <Overlay children={<ContactForm />} onCloseClick={closeOverlay} />}
    </BasicTemplate>
  );
};

export default SurfPark;
