import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header } from '../components/header/header';
import { Headline } from '../components/headline/headline';

export default class SurfPark extends React.Component {
  public render() {
    return (
      <BasicTemplate>
        <Header>
          <Headline type="h1">Surf-park</Headline>
          <Headline type="h3">The ideal solution for wakeboard cable parks of any size</Headline>
        </Header>
      </BasicTemplate>
    );
  }
}
