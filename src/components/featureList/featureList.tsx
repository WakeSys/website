import * as React from 'react';
import { FeatureListItem, IFeatureListItemProps } from '../featureListItem/featureListItem';

const styles = require('./featureList.module.scss');

interface IFeatureListProps {
  featureList: IFeatureListItemProps[];
}

export const FeatureList: React.SFC<IFeatureListProps> = ({ featureList }) => {
  return (
    <ul className={styles.featureList}>
      {featureList.map(item => (
        <FeatureListItem key={item.label} label={item.label} />
      ))}
    </ul>
  );
};
