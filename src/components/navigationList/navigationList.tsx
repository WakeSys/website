import * as React from 'react';
import { NavigationItem, INavigationItem } from '../navigationItem/navigationItem';

const styles = require('./navigationList.module.scss');

export interface INavigationList {
  navigationList: INavigationItem[];
}

export const NavigationList: React.SFC<INavigationList> = ({ navigationList }) => (
  <ul className={styles.navigationList}>
    {navigationList.map(item => (
      <NavigationItem key={item.to} to={item.to} label={item.label} href={item.href} />
    ))}
  </ul>
);
