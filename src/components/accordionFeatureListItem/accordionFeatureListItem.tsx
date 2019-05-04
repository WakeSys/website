import React, { useState } from 'react';
import { Icon } from '../icon/icon';
import { chevronDown, chevronUp } from '../icon/iconList';
import { FeatureList } from '../featureList/featureList';
import { IFeatureListItemProps } from '../featureListItem/featureListItem';
import classNames from 'classnames';

const styles = require('./accordionFeatureListItem.module.scss');

interface IAccordionFeatureListItemProps {
  label: string;
  featureList: IFeatureListItemProps[];
  className?: string;
}

export const AccordionFeatureListItem: React.FunctionComponent<IAccordionFeatureListItemProps> = ({
  label,
  featureList,
  className,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.root}>
      <button type="button" className={classNames(styles.accordionFeatureListItem, className)} onClick={() => setIsExpanded(!isExpanded)}>
        <span className={styles.accordionFeatureListLabel}>{label}</span>
        <div className={styles.expandSection}>
          <span className={styles.expandInfoText}>See all features</span>
          <div
            className={classNames(styles.expandIcon, {
              [styles.active]: isExpanded
            })}
          />
        </div>
      </button>
      <div
        className={classNames(styles.content, {
          [styles.contentExpanded]: isExpanded
        })}
      >
        {children}
      </div>
    </div>
  );
};
