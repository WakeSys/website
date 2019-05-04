import React from 'react';
import classNames from 'classnames';

const styles = require('./button.module.scss');

type ButtonSize = 'small' | 'big';

type ButtonType = 'primary' | 'secondary' | 'inverse';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  buttonSize?: ButtonSize;
  className?: string;
  label: string;
  buttonType: ButtonType;
}

export const Button: React.FunctionComponent<IButton> = ({ className, label, buttonSize, buttonType, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={classNames(styles.button, className, {
        [styles.buttonSmall]: buttonSize === 'small',
        [styles.buttonBig]: buttonSize === 'big',
        [styles.inverse]: buttonType === 'inverse'
      })}
    >
      {label}
    </button>
  );
};
