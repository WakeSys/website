import * as React from 'react';

const styles = require('./introductionVisual.module.scss');
const introSatisticsVisual = require('../assets/wakepark-intro-visual.png');

interface Props {
  tickets: string;
  label: string;
  total: string;
}

export const IntroductionVisual: React.FunctionComponent<Props> = ({ tickets, label, total }) => {
  return (
    <div className={styles.introductionVisual}>
      <div className={styles.introductionWrapper}>
        <span className={styles.introductionTickets}>Tickets: {tickets}</span>
        <span className={styles.introductionMembership}>{label}</span>
        <span className={styles.introductionDivider} />
        <span className={styles.introductionTotal}>Total: {total}</span>
        <img className={styles.introductionStatistics} src={introSatisticsVisual} />
      </div>
    </div>
  );
};
