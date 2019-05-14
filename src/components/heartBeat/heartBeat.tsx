import React from 'react';

const styles = require('./heartBeat.module.scss');

export const HeartBeat: React.FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <svg width="46px" height="42px" viewBox="0 0 46 42" version="1.1">
        <g transform="translate(-489.000000, -627.000000)" fill="currentColor" fillRule="nonzero">
          <g transform="translate(489.000000, 627.000000)">
            <path d="M33.12,4.66666667 C37.72,4.66666667 41.4,8.4 41.4,13.0666667 C41.4,17.7333333 32.43,28 23,35.9333333 C13.57,27.7666667 4.6,17.5 4.6,13.0666667 C4.6,8.4 8.28,4.66666667 12.88,4.66666667 C18.4,4.66666667 23,11.6666667 23,11.6666667 C23,11.6666667 27.37,4.66666667 33.12,4.66666667 L33.12,4.66666667 Z M33.12,0 C28.98,0 25.3,2.1 23,5.36666667 C20.7,2.1 17.02,0 12.88,0 C5.75,0 0,5.83333333 0,13.0666667 C0,23.3333333 23,42 23,42 C23,42 46,23.3333333 46,13.0666667 C46,5.83333333 40.25,0 33.12,0 L33.12,0 Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};
