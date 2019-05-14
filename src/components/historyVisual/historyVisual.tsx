import React from 'react';

const styles = require('./historyVisual.module.scss');

export const HistoryVisual: React.FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <svg width="18px" height="118px" viewBox="0 0 18 118" version="1.1">
        <defs>
          <linearGradient x1="-1.05314897%" y1="2.1643822%" x2="70.6521937%" y2="92.2189412%" id="history-gradient">
            <stop stopColor="#4A90E2" offset="0%" />
            <stop stopColor="#88BEFC" offset="100%" />
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-203.000000, -823.000000)" fill="url(#history-gradient)">
            <g transform="translate(203.000000, 823.000000)">
              <circle cx="9" cy="44" r="9" />
              <circle cx="9" cy="22" r="2" />
              <circle cx="9" cy="86" r="2" />
              <circle cx="9" cy="116" r="2" />
              <circle cx="9" cy="12" r="2" />
              <circle cx="9" cy="76" r="2" />
              <circle cx="9" cy="106" r="2" />
              <circle cx="9" cy="2" r="2" />
              <circle cx="9" cy="66" r="2" />
              <circle cx="9" cy="96" r="2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
