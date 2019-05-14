import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { Paragraph } from '../components/paragraph/paragraph';

export default class Imprint extends React.Component {
  public render() {
    return (
      <BasicTemplate>
        <Header type={HeaderType.GREY}>
          <Headline type="h1">Imprint</Headline>
        </Header>
        <SectionWrapper alignment="column">
          <Headline type="h2">Legal Address</Headline>
          <Paragraph>
            WakeSys s.a.r.l.
            <br /> 3, montée St. Hubert
            <br /> L8387 Koerich
            <br /> Luxembourg
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Contact information</Headline>
          <Paragraph>
            Phone: +49 151 2666 5395
            <br /> Skype: wakesys
            <br /> Email: info@wakesys.com
          </Paragraph>
        </SectionWrapper>
        <SectionWrapper alignment="column">
          <Headline type="h2">Other important stuff</Headline>
          <Paragraph>
            Business registration number: B181238
            <br /> VAT number: LU26482247
            <br /> Tax number: 2013 2447 951
          </Paragraph>
        </SectionWrapper>
      </BasicTemplate>
    );
  }
}
