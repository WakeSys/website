import React from 'react';
import classNames from 'classnames';

const styles = require('./content.module.scss');

interface Props {
  size: '100' | '90' | '80' | '70' | '60' | '50' | '40' | '30' | '20' | '10';
}

export const Content: React.FunctionComponent<Props> = ({ children, size }) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.fullWidth]: size === '100',
        [styles.ninety]: size === '90',
        [styles.eighty]: size === '80',
        [styles.seventy]: size === '70',
        [styles.sixty]: size === '60',
        [styles.fivty]: size === '50',
        [styles.fourty]: size === '40',
        [styles.thirty]: size === '30',
        [styles.twenty]: size === '20',
        [styles.ten]: size === '10'
      })}
    >
      {children}
    </div>
  );
};
