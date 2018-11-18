import * as React from 'react';
import * as classnames from 'classnames';

import { NavigationItem, INavigationItem } from '../navigationItem/navigationItem';
import { MenuButton } from '../menuButton/menuButton';

const styles = require('./navigationList.module.scss');

export interface INavigationListProps {
  navigationList: INavigationItem[];
}

interface INavigationListState {
  isMenuButtonActive: boolean;
  isMenuVisible: boolean;
}

export class NavigationList extends React.Component<INavigationListProps, INavigationListState> {
  public state: INavigationListState = { isMenuButtonActive: false, isMenuVisible: true };

  public render() {
    const { navigationList } = this.props;
    return (
      <>
        <ul className={styles.navigationList}>
          {navigationList.map(item => (
            <NavigationItem key={item.to} to={item.to} label={item.label} href={item.href} />
          ))}
        </ul>
        <div className={styles.mobileNavigation}>
          <MenuButton
            className={classnames(styles.menuButton, {
              [styles.menuButtonActive]: this.state.isMenuButtonActive
            })}
            isMenuButtonActive={this.state.isMenuButtonActive}
            onClickMenuButton={this.toggleMenuButton}
          />
          {this.state.isMenuButtonActive && (
            <ul
              className={classnames(styles.navigationListMobile, {
                [styles.navigationListMobileActive]: this.state.isMenuButtonActive
              })}
            >
              <div className={styles.backdrop} />
              {navigationList.map(item => (
                <NavigationItem key={item.to} className={styles.navigationItemMobile} to={item.to} label={item.label} href={item.href} />
              ))}
            </ul>
          )}
        </div>
      </>
    );
  }

  private toggleMenuButton = () => {
    this.setState({
      isMenuButtonActive: !this.state.isMenuButtonActive
    });
  };
}
