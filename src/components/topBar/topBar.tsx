import * as React from 'react';
import { Logo } from '../logo/logo';
import { NavigationList } from '../navigationList/navigationList';
import { Button } from '../button/button';
import { INavigationItem } from '../navigationItem/navigationItem';

const styles = require('./tobBar.module.scss');

interface ITopBarProps {
  navigationList: INavigationItem[];
  label: string;
  openOverlay: () => void;
}

export const TopBar: React.SFC<ITopBarProps> = ({ navigationList, label, openOverlay }) => {
  return (
    <div className={styles.topBar}>
      <Logo type="colorful" />
      <div className={styles.wrapper}>
        <NavigationList navigationList={navigationList} />
        <Button buttonSize="small" label={label} onClick={openOverlay} />
      </div>
    </div>
  );
};
