import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Paragraph, ParagraphAlignment } from '../components/paragraph/paragraph';
import { Button } from '../components/button/button';
import { Overlay } from '../components/overlay/overlay';
import { ContactForm } from '../components/contactForm/contactForm';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { Content } from '../components/content/content';
import { HeartBeat } from '../components/heartBeat/heartBeat';
import { HistoryVisual } from '../components/historyVisual/historyVisual';

const AboutUs: React.FunctionComponent = () => {
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);

  const closeOverlay = () => setIsOverlayOpen(false);
  const openOverlay = () => setIsOverlayOpen(true);

  return (
    <BasicTemplate>
      <Header type={HeaderType.GREY}>
        <Headline type="h1">About WakeSys</Headline>
        <Paragraph isInverse isInHeader alignment={ParagraphAlignment.CENTER}>
          WakeSys is your solution to enhance your wakeboard park’s, aqua park’s or surf park's operations. Providing an easy-to-use booking
          and management system, it will reduce all manual efforts in the running of your park.
        </Paragraph>
      </Header>
      <SectionWrapper alignment="column">
        <Headline type="h2" alignment="center">
          We are more than an online booking system
        </Headline>
        <Paragraph alignment={ParagraphAlignment.CENTER}>
          We love what we do and this is what our customers appreciate: You find a problem in the system or have a request? We will look at
          it and give our best to immediately find the right solution. This way we continue to keep our system ahead of the game.
        </Paragraph>
        <Content size="100" alignment="center">
          <HeartBeat />
        </Content>
      </SectionWrapper>
      <Headline type="h2" alignment="center">
        Our story
      </Headline>
      <SectionWrapper>
        <Content size="30">
          <HistoryVisual />
        </Content>
        <Content size="70">
          <Headline type="h3">2006: Beginnings at a wakeboard school</Headline>
          <Paragraph>
            The idea for creating an easy-to-use solution for the watersports industry dates back to 2006 when Chris decided to found
            youthwake.lu, a non-profit wakeboard school run by college students in Luxembourg.
            <br />
            <br />
            It goes without saying that nobody in the club was very keen on the accounting part of managing a wakeboard school. This is why
            Chris and his friend Sebastian started developing a simple booking system for youthwake.lu that would automate all daily
            operations and manage invoices.
          </Paragraph>
        </Content>
      </SectionWrapper>
      <SectionWrapper>
        <Content size="30">
          <HistoryVisual />
        </Content>
        <Content size="70">
          <Headline type="h3">2010: Tour around the globe</Headline>
          <Paragraph>
            In the spring of 2010, Jessi and Chris headed off on a trip around the world using the occasion to show WakeSys to wake schools
            and parks along the way in order to gather as much feedback as possible. Internationally known wake parks like OWC and Texas Ski
            Ranch in the US made us rethink the features of our system. Hence, we started expanding it to include online bookings and online
            payments. At this point, Christophe and Dave joined our team and remain the two lead engineers at WakeSys.
          </Paragraph>
        </Content>
      </SectionWrapper>
      <SectionWrapper>
        <Content size="30">
          <HistoryVisual />
        </Content>
        <Content size="70">
          <Headline type="h3">2012: First two-tower cable on WakeSys</Headline>
          <Paragraph>
            In 2012, the first two-tower cable park operators became interested in WakeSys, which until then had only been available to
            non-profits and schools with boats. After carefully listening to the needs of two-tower parks, we decided to extend the software
            to incorporate their specific needs.
          </Paragraph>
        </Content>
      </SectionWrapper>
      <SectionWrapper>
        <Content size="30">
          <HistoryVisual />
        </Content>
        <Content size="70">
          <Headline type="h3">2014: First full-size cable on WakeSys</Headline>
          <Paragraph>
            After offering WakeSys to two-tower parks, it was only one more step to becoming the tailor-made solution for the water sports
            industry. Thus in 2014, we decided to do one more overhaul of WakeSys in order to satisfy the needs of full-size cable park
            customers and operators.
          </Paragraph>
        </Content>
      </SectionWrapper>
      <SectionWrapper>
        <Content size="30">
          <HistoryVisual />
        </Content>
        <Content size="70">
          <Headline type="h3">2018/2019: First aqua parks and surf parks on WakeSys</Headline>
          <Paragraph>
            We like to call WakeSys your enterprise software. This means that we have a solution for all common operations of water sports
            parks, no matter if it’s wakeboarding, aqua park or surfing. In 2018, we took the next step to make sure that WakeSys can be
            used by water sports parks with numerous activities. On top of that, we have welcomed Stevie into our team. He supports the
            technical development of WakeSys.
          </Paragraph>
        </Content>
      </SectionWrapper>
      <SectionWrapper fullWidth withBackground>
        <Content size="100" alignment="center">
          <Headline type="h2" alignment="center">
            When are you ready to start with WakeSys?
          </Headline>
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" />
        </Content>
      </SectionWrapper>
      {isOverlayOpen && <Overlay children={<ContactForm />} onCloseClick={closeOverlay} />}
    </BasicTemplate>
  );
};

export default AboutUs;
