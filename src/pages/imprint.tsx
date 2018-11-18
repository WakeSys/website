import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header } from '../components/header/header';
import { Headline } from '../components/headline/headline';

export default class Imprint extends React.Component {
  public render() {
    return (
      <BasicTemplate>
        <Header>
          <Headline type="h1">Imprint</Headline>
        </Header>
      </BasicTemplate>
    );
  }
}
