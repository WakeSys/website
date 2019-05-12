import * as React from 'react';

const styles = require('./customerVisual.module.scss');

interface Props {
  imageUrl: string;
}

export const CustomerVisual: React.FunctionComponent<Props> = ({ imageUrl }) => {
  return (
    <div className={styles.customerVisual}>
      <img className={styles.customerVisualImage} src={imageUrl} alt="mobile devices and smart watch with barcode" />
    </div>
  );
};
