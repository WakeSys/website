import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./icon.module.scss');

export interface IIconProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

export interface Props extends IIconProps {
  icon: string;
}

export const Icon: React.SFC<Props> = ({ icon, onClick, className }: Props) => {
  return <span className={classnames(className, styles.icon)} dangerouslySetInnerHTML={{ __html: icon }} onClick={onClick} />;
};
