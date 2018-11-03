import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./menuButton.module.scss');

interface IMenuButtonProps {
  isMenuButtonActive: boolean;
  className?: string;
  onClickMenuButton?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const MenuButton: React.SFC<IMenuButtonProps> = ({ isMenuButtonActive, onClickMenuButton, className }) => {
  return (
    <button className={styles.menuButton} onClick={onClickMenuButton}>
      <span
        className={classnames(styles.lineWrapper, className, {
          [styles.isExpanded]: isMenuButtonActive
        })}
      >
        <span className={classnames(styles.lineMenu, styles.half, styles.start)} />
        <span className={styles.lineMenu} />
        <span className={classnames(styles.lineMenu, styles.half, styles.end)} />
      </span>
    </button>
  );
};
