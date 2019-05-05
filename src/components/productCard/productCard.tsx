import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '../icon/icon';
import { chevronRight } from '../icon/iconList';
import classNames from 'classnames';

const styles = require('./productCard.module.scss');

export enum Color {
  BLUE,
  GREEN,
  PURPLE
}

interface Props {
  productType: Color;
  link: string;
  productName: string;
}

export const ProductCard: React.FunctionComponent<Props> = ({ productType, productName, link }) => {
  return (
    <Link className={styles.root} to={link}>
      <div
        className={classNames(styles.header, {
          [styles.blue]: productType === Color.BLUE,
          [styles.green]: productType === Color.GREEN,
          [styles.purple]: productType === Color.PURPLE
        })}
      >
        <span className={styles.productName}>{productName}</span>
      </div>
      <div className={styles.footer}>
        See all features
        <Icon icon={chevronRight} />
      </div>
    </Link>
  );
};
