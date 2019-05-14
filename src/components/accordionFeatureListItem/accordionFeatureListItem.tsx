import React, { useState } from 'react';
import classNames from 'classnames';

const styles = require('./accordionFeatureListItem.module.scss');

interface IAccordionFeatureListItemProps {
  label: string;
  className?: string;
  infoLabel?: string;
}

export const AccordionFeatureListItem: React.FunctionComponent<IAccordionFeatureListItemProps> = ({
  label,
  className,
  children,
  infoLabel = 'See all features'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.root}>
      <button type="button" className={classNames(styles.accordionFeatureListItem, className)} onClick={() => setIsExpanded(!isExpanded)}>
        <span className={styles.accordionFeatureListLabel}>{label}</span>
        <div className={styles.expandSection}>
          <span className={styles.expandInfoText}>{infoLabel}</span>
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
