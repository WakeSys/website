import * as React from 'react';

import { ReferenceTileList } from '../referenceTile/referenceTileList';
import { IReferenceTileProps } from '../referenceTile/referenceTileItem';
import { Headline } from '../headline/headline';

const styles = require('./userStoriesTeaser.module.scss');

interface IUserStoriesTeaserProps {
  reference: IReferenceTileProps[];
  headline: string;
  subHeadline: string;
}

export const UserStoriesTeaser: React.SFC<IUserStoriesTeaserProps> = ({ headline, subHeadline, reference }) => {
  return (
    <div className={styles.userStoriesTeaser}>
      <Headline type="h3">{subHeadline}</Headline>
      <Headline type="h2">{headline}</Headline>
      <ReferenceTileList reference={reference} />
    </div>
  );
};
