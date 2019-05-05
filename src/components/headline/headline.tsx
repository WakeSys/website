import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./headline.module.scss');

interface IHeadlineProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'topic';
  inverse?: boolean;
  children: React.ReactNode;
  className?: string;
  noMargin?: boolean;
  alignment?: 'center' | 'right';
}

export const Headline: React.FunctionComponent<IHeadlineProps> = ({ type, children, className, noMargin, inverse, alignment }) => {
  switch (type) {
    case 'h1':
      return (
        <h1
          className={classnames(styles.headline, styles.h1, className, {
            [styles.withoutMargin]: noMargin,
            [styles.inverse]: inverse,
            [styles.center]: alignment === 'center',
            [styles.right]: alignment === 'right'
          })}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={classnames(styles.headline, styles.h2, className, {
            [styles.withoutMargin]: noMargin,
            [styles.center]: alignment === 'center',
            [styles.right]: alignment === 'right'
          })}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={classnames(styles.headline, styles.h3, className, {
            [styles.withoutMargin]: noMargin,
            [styles.center]: alignment === 'center',
            [styles.right]: alignment === 'right'
          })}
        >
          {children}
        </h3>
      );
    case 'topic':
      return (
        <span
          className={classnames(styles.headline, styles.topic, className, {
            [styles.withoutMargin]: noMargin,
            [styles.center]: alignment === 'center',
            [styles.right]: alignment === 'right'
          })}
        >
          {children}
        </span>
      );
    default:
      return (
        <h3
          className={classnames(styles.headline, styles.h4, className, {
            [styles.withoutMargin]: noMargin,
            [styles.center]: alignment === 'center',
            [styles.right]: alignment === 'right'
          })}
        >
          {children}
        </h3>
      );
  }
};
