import React from 'react';

const styles = require('./trustSection.module.scss');

export interface Items {
  imageUrl: string;
  altAttr: string;
}

export interface Props {
  label: string;
  items: Items[];
}

export const TrustSection: React.FunctionComponent<Props> = ({ label, items }) => {
  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>
      <div className={styles.images}>
        {items.map(item => (
          <div className={styles.wrapper}>
            <img key={item.imageUrl} src={item.imageUrl} alt={item.altAttr} />
          </div>
        ))}
      </div>
    </div>
  );
};
