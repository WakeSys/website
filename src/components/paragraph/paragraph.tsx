import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./paragraph.module.scss');

interface IParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.SFC<IParagraphProps> = ({ children, className }) => {
  return <p className={classnames(className, styles.paragraph)}>{children}</p>;
};
