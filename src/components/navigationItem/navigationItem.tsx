import * as React from 'react';
import { Link } from 'gatsby';
import '../_constants.scss';

const styles = require('./navigationItem.module.scss');
const constants = require('../_constants.scss');

export interface INavigationItem {
  to: string;
  label: string;
  href?: string;
}

export const NavigationItem: React.SFC<INavigationItem> = ({ to, label, href }) => (
  <li className={styles.navigationListItem}>
    {href ? (
      <a className={styles.navigationLinkItem} href={href}>
        {label}
      </a>
    ) : (
      <Link className={styles.navigationLinkItem} to={to} activeStyle={{ color: constants.wakeSysBlue }}>
        {label}
      </Link>
    )}
  </li>
);
