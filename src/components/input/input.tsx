import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./input.module.scss');

interface IInputProps {
  htmlForLabel: string;
  label: string;
  placeholder?: string;
  type: 'email' | 'url' | 'tel' | 'text';
  autoFocus?: boolean;
  value?: string;
  className?: string;
  inputClassName?: string;
  name?: string;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.SFC<IInputProps> = ({
  htmlForLabel,
  label,
  placeholder,
  type,
  value,
  autoFocus,
  className,
  inputClassName,
  onChange,
  onKeyPress
}) => {
  return (
    <div className={classnames(styles.inputWrapper, className)}>
      <label className={styles.inputLabel} htmlFor={htmlForLabel}>
        {label}
      </label>
      <input
        id={htmlForLabel}
        type={type}
        value={value}
        name={htmlForLabel}
        autoFocus={autoFocus}
        className={classnames(styles.input, inputClassName)}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};
