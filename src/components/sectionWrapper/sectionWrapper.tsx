import React from 'react';
import classNames from 'classnames';

const styles = require('./sectionWrapper.module.scss');

interface ISectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  alignment?: 'column';
  withBackground?: boolean;
  visual?: string;
  boxed?: boolean;
}

export const SectionWrapper: React.SFC<ISectionWrapperProps> = ({
  children,
  className,
  fullWidth,
  alignment,
  withBackground,
  visual,
  boxed
}) => {
  return (
    <div
      className={classNames(styles.sectionWrapper, className, {
        [styles.sectionWrapperFullwidth]: fullWidth,
        [styles.alignmentColumn]: alignment === 'column',
        [styles.withBackground]: withBackground,
        [styles.visual]: visual
      })}
      style={{ backgroundImage: `url(${visual})` }}
    >
      {fullWidth ? (
        <div
          className={classNames(styles.wrapper, {
            [styles.boxed]: boxed
          })}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};
