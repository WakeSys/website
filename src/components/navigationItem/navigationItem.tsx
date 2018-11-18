import * as React from 'react';
import { Link } from 'gatsby';
import * as classnames from 'classnames';

import '../_constants.scss';

const styles = require('./navigationItem.module.scss');

export interface INavigationItem {
  to: string;
  label: string;
  href?: string;
  className?: string;
}

export const NavigationItem: React.SFC<INavigationItem> = ({ to, label, href, className }) => (
  <li className={classnames(styles.navigationListItem, className)}>
    {href ? (
      <a className={styles.navigationLinkItem} href={href}>
        {label}
      </a>
    ) : (
      <Link className={styles.navigationLinkItem} to={to}>
        {label}
      </Link>
    )}
  </li>
);
