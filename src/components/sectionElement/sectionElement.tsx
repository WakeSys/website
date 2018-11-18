import * as React from 'react';
import { IIconListProps, IconList } from './iconList';
import { Headline } from '../headline/headline';

const styles = require('./sectionElement.module.scss');

interface ISectionElementProps {
  headline: string;
  description: string;
  type: keyof IIconListProps;
  onClick?: () => void;
}

export const SectionElement: React.SFC<ISectionElementProps> = ({ type, headline, description, onClick }) => {
  const Icon = IconList[type];
  return (
    <div className={styles.sectionElement} onClick={onClick}>
      <div className={styles.sectionElementIcon}>
        <Icon />
      </div>
      <div className={styles.sectionElementWrapper}>
        <Headline noMargin type="h4">
          {headline}
        </Headline>
        <span className={styles.sectionElementDescription}>{description}</span>
      </div>
    </div>
  );
};
