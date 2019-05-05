import React from 'react';

const styles = require('./visualSection.module.scss');

interface Props {
  visual: string;
}

export const VisualSection: React.FunctionComponent<Props> = ({ children, visual }) => {
  return (
    <div className={styles.root} style={{ backgroundImage: `url(${visual})` }}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
