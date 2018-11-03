import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./header.module.scss');

interface IHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Header: React.SFC<IHeaderProps> = ({ children, className }) => {
  return <header className={classnames(styles.header, className)}>{children}</header>;
};
