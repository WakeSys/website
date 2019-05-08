import * as React from 'react';

const styles = require('./introductionVisual.module.scss');
const introSatisticsVisual = require('../assets/wakepark-intro-visual.png');

export const IntroductionVisual: React.SFC = () => {
  return (
    <div className={styles.introductionVisual}>
      <div className={styles.introductionWrapper}>
        <span className={styles.introductionTickets}>Tickets: $ 2000</span>
        <span className={styles.introductionMembership}>Memberships: $ 549,00</span>
        <span className={styles.introductionDivider} />
        <span className={styles.introductionTotal}>Total: $ 2549,00</span>
        <img className={styles.introductionStatistics} src={introSatisticsVisual} />
      </div>
    </div>
  );
};
