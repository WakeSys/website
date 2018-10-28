import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./headline.module.scss');

interface IHeadlineProps {
  type: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}

export const Headline: React.SFC<IHeadlineProps> = ({ type, children, className }) => {
  switch (type) {
    case 'h1':
      return <h1 className={classnames(styles.headline, styles.h1, className)}>{children}</h1>;
    case 'h2':
      return <h2 className={classnames(styles.headline, styles.h2, className)}>{children}</h2>;
    default:
      return <h3 className={classnames(styles.headline, styles.h3, className)}>{children}</h3>;
  }
};
