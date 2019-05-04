import React from 'react';
import classNames from 'classnames';

const styles = require('./header.module.scss');

export enum HeaderType {
  VISUAL,
  BLUE,
  PURPLE,
  GREEN
}

export enum HeaderAlignment {
  LEFT,
  CENTER,
  RIGHT
}

interface IHeaderProps {
  children: React.ReactNode;
  className?: string;
  type?: HeaderType;
  backgroundImage?: string;
  alignment?: HeaderAlignment;
}

export const Header: React.FunctionComponent<IHeaderProps> = ({
  children,
  className,
  type = HeaderType.VISUAL,
  backgroundImage,
  alignment = HeaderAlignment.CENTER
}) => {
  const renderGradient = () => {
    switch (type) {
      case HeaderType.BLUE: {
        return (
          <linearGradient x1="-1.05314897%" y1="37.0166678%" x2="70.6521937%" y2="61.4588787%" id="linearGradient-1">
            <stop stop-color="#4A90E2" offset="0%" />
            <stop stop-color="#88BEFC" offset="100%" />
          </linearGradient>
        );
      }
      case HeaderType.GREEN: {
        return (
          <linearGradient x1="-1.05314897%" y1="37.0166678%" x2="70.6521937%" y2="61.4588787%" id="linearGradient-1">
            <stop stop-color="#4AE2BD" offset="0%" />
            <stop stop-color="#68CFD3" offset="100%" />
          </linearGradient>
        );
      }
      case HeaderType.PURPLE: {
        return (
          <linearGradient x1="-1.05314897%" y1="37.0166678%" x2="70.6521937%" y2="61.4588787%" id="linearGradient-1">
            <stop stop-color="#4D7ADC" offset="0%" />
            <stop stop-color="#C055FF" offset="100%" />
          </linearGradient>
        );
      }
    }
  };
  console.log('backgroundImage', backgroundImage);

  const image = backgroundImage && { backgroundImage: `url(${backgroundImage})` };
  return (
    <header
      className={classNames(styles.root, className, {
        [styles.visual]: type === HeaderType.VISUAL,
        [styles.blue]: type === HeaderType.BLUE,
        [styles.purple]: type === HeaderType.PURPLE,
        [styles.green]: type === HeaderType.GREEN
      })}
      style={image}
    >
      {type === HeaderType.VISUAL ? (
        <div className={styles.backdrop} />
      ) : (
        <svg className={styles.svg} viewBox="0 0 1024 534" version="1.1" preserveAspectRatio="none">
          <defs>{renderGradient()}</defs>
          <path
            d="M9.98312544e-13,390 C1.99662509e-12,390 138.112208,364.817919 229,416.5 C319.887792,468.182081 399.111496,534 512.5,534 C625.888504,534 678.714525,443.785159 811.041987,451.090042 C966.541987,459.674121 1025,325.5 1025,325.5 C1025,325.5 1024.66667,217 1024,0 L0,0 C0,260 3.32770848e-13,390 9.98312544e-13,390 Z"
            id="Path-14"
            fill="url(#linearGradient-1)"
          />
          <path
            className={styles.slopeShape}
            d="M587,520.513464 C564.428984,528.583983 540.282415,534 512.499999,534 C399.111495,534 319.887791,468.182081 228.999999,416.5 C138.112233,364.817933 7.70191293e-05,389.999986 3.32109571e-11,390 L0,173 C391.333332,239.503576 586.999998,354.139963 586.999998,516.909161 L586.999998,520.513461 Z"
            id="Combined-Shape"
            fill="#FFFFFF"
            opacity="0.100957961"
          />
        </svg>
      )}
      <div
        className={classNames(styles.content, {
          [styles.contentLeft]: alignment === HeaderAlignment.LEFT,
          [styles.contentCenter]: alignment === HeaderAlignment.CENTER,
          [styles.contentRight]: alignment === HeaderAlignment.RIGHT
        })}
      >
        {children}
      </div>
    </header>
  );
};
