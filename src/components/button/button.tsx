import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./button.module.scss');

type ButtonSize = 'small' | 'big';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  buttonSize?: ButtonSize;
  className?: string;
  label: string;
}

export const Button: React.SFC<IButton> = ({ className, label, buttonSize, ...buttonProps }) => {
  return (
    <button
      className={classnames(styles.button, className, {
        [styles.buttonSmall]: buttonSize === 'small',
        [styles.buttonBig]: buttonSize === 'big'
      })}
      {...buttonProps}
    >
      {label}
    </button>
  );
};
