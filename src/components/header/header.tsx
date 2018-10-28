import * as React from 'react';

const styles = require('./header.module.scss');

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header: React.SFC<IHeaderProps> = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};
