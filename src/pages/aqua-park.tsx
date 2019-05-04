import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';

export default class AquaPark extends React.Component {
  public render() {
    return (
      <BasicTemplate>
        <Header type={HeaderType.GREEN}>
          <Headline type="h1">Aqua-park</Headline>
          <Headline type="h3">The ideal solution for wakeboard cable parks of any size</Headline>
        </Header>
      </BasicTemplate>
    );
  }
}
