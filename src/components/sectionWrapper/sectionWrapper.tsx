import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./sectionWrapper.module.scss');

interface ISectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  alignment?: 'column';
}

export const SectionWrapper: React.SFC<ISectionWrapperProps> = ({ children, className, fullWidth, alignment }) => {
  return (
    <div
      className={classnames(styles.sectionWrapper, className, {
        [styles.sectionWrapperFullwidth]: fullWidth,
        [styles.alignmentColumn]: alignment === 'column'
      })}
    >
      {children}
    </div>
  );
};
