import classNames from 'classnames';
import React from 'react';

const styles = require('./grid.module.scss');

export type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Props {
  start: Column;
  span: Column;
  children?: React.ReactNode;
  className?: string;
}

export const GridItem: React.FunctionComponent<Props> = ({ className, children, start, span }) => {
  const rootClasses = classNames(styles.rootItem, styles[`rootItemStart${start}`], styles[`rootItemSpan${span}`], className);

  return <div className={rootClasses}>{children}</div>;
};
