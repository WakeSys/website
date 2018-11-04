import * as React from 'react';
import * as classnames from 'classnames';

import { FeatureListItem, IFeatureListItemProps } from '../featureListItem/featureListItem';

const styles = require('./featureList.module.scss');

interface IFeatureListProps {
  featureList: IFeatureListItemProps[];
  className?: string;
}

export const FeatureList: React.SFC<IFeatureListProps> = ({ featureList, className }) => {
  return (
    <ul className={classnames(styles.featureList, className)}>
      {featureList.map(item => (
        <FeatureListItem key={item.label} label={item.label} />
      ))}
    </ul>
  );
};
