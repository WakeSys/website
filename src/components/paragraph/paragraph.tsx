import React from 'react';
import classNames from 'classnames';

const styles = require('./paragraph.module.scss');

export enum ParagraphAlignment {
  CENTER,
  RIGHT
}

interface IParagraphProps {
  children: React.ReactNode;
  className?: string;
  isInverse?: boolean;
  alignment?: ParagraphAlignment;
  isInHeader?: boolean;
}

export const Paragraph: React.FunctionComponent<IParagraphProps> = ({ children, className, isInverse, alignment, isInHeader }) => {
  return (
    <p
      className={classNames(className, styles.paragraph, {
        [styles.isInverse]: isInverse,
        [styles.center]: alignment === ParagraphAlignment.CENTER,
        [styles.right]: alignment === ParagraphAlignment.RIGHT,
        [styles.isInHeader]: isInHeader
      })}
    >
      {children}
    </p>
  );
};
