import React, { useState } from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderAlignment } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { Paragraph } from '../components/paragraph/paragraph';
import { Button } from '../components/button/button';

const styles = require('./Index.module.scss');

const startpageVisual = require('../components/assets/startpage-visual.png');

const IndexPage: React.FunctionComponent = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <BasicTemplate>
      <Header className={styles.header} backgroundImage={startpageVisual} alignment={HeaderAlignment.LEFT}>
        <Headline className={styles.headline} type="h1">
          WakeSys is an
          <br /> enterprise software
        </Headline>
        <Paragraph isInHeader isInverse>
          with integrated online booking tailor-made for parks in the watersports industry, wanting to automate, track and simplify their
          operations.
        </Paragraph>
        <Button onClick={() => setIsOverlayOpen(true)} buttonSize="big" label="Request free demo" buttonType="inverse" />
      </Header>
    </BasicTemplate>
  );
};

export default IndexPage;
