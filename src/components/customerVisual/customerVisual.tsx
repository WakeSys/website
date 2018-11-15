import * as React from 'react';

const styles = require('./customerVisual.module.scss');
const customerVisual = require('../assets/wakesys-customer-visual2x.jpg');

export const CustomerVisual: React.SFC = () => {
  return (
    <div className={styles.customerVisual}>
      <img className={styles.customerVisualImage} src={customerVisual} />
    </div>
  );
};
