import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Paragraph, ParagraphAlignment } from '../components/paragraph/paragraph';

export default class AquaPark extends React.Component {
  public render() {
    return (
      <BasicTemplate>
        <Header type={HeaderType.GREEN}>
          <Headline type="h1">Aqua Parks</Headline>
          <Paragraph isInverse isInHeader alignment={ParagraphAlignment.CENTER}>
            Aqua parks have special operations: Within a short time you need to bring a large amount of people on the water. With WakeSys
            you get fast passes allowing groups and individuals to check-in prior to arrival. Just like at the airport.
          </Paragraph>
        </Header>
      </BasicTemplate>
    );
  }
}
