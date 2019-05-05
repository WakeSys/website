import classNames from 'classnames';
import React from 'react';

const styles = require('./grid.module.scss');

export interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Grid: React.FunctionComponent<Props> = ({ className, children }) => (
  <div className={classNames(styles.root, className)}>{children}</div>
);
