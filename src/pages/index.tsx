import * as React from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Button } from '../components/button/button';
import { Paragraph } from '../components/paragraph/paragraph';

const styles = require('./Index.module.scss');

export default class IndexPage extends React.Component {
  public render() {
    return (
      <BasicTemplate>
        <Header>
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
        <div className={styles.Container}>
          <h1>Moini</h1>
        </div>
      </BasicTemplate>
    );
  }
}
