import * as React from 'react';
import { Icon } from '../icon/icon';
import { checkmark } from '../icon/iconList';

const styles = require('./featureListItem.module.scss');

export interface IFeatureListItemProps {
  label: string;
}

export const FeatureListItem: React.SFC<IFeatureListItemProps> = ({ label }) => {
  return (
    <li className={styles.featureListItem}>
      <Icon className={styles.FeatureListItemIcon} icon={checkmark} />
      <span className={styles.featureListItemLabel}>{label}</span>
    </li>
  );
};
