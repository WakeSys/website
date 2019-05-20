import * as React from 'react';
import { ReferenceTileItem, IReferenceTileProps } from './referenceTileItem';

const styles = require('./referenceTile.module.scss');

export interface IReferenceTileListProps {
  reference: IReferenceTileProps[];
}

export const ReferenceTileList: React.SFC<IReferenceTileListProps> = ({ reference }) => {
  return (
    <ul className={styles.referenceTileList}>
      {reference.map(item => (
        <ReferenceTileItem
          key={item.imageUrl}
          imageUrl={item.imageUrl}
          altAttribute={item.altAttribute}
          youtubeId={item.youtubeId}
          href={item.href}
        />
      ))}
    </ul>
  );
};
