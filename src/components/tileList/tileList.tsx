import React from 'react';

const styles = require('./tileList.module.scss');

export const TileList: React.FunctionComponent = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
