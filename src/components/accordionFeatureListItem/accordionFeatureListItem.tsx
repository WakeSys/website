import * as React from 'react';
import { Icon } from '../icon/icon';
import { chevronDown, chevronUp } from '../icon/iconList';
import { FeatureList } from '../featureList/featureList';
import { IFeatureListItemProps } from '../featureListItem/featureListItem';
import * as classnames from 'classnames';

const styles = require('./accordionFeatureListItem.module.scss');

interface IAccordionFeatureListItemProps {
  label: string;
  featureList: IFeatureListItemProps[];
  className?: string;
}

interface IAccordionFeatureListItemState {
  isExpanded: boolean;
}

export class AccordionFeatureListItem extends React.Component<IAccordionFeatureListItemProps, IAccordionFeatureListItemState> {
  state: IAccordionFeatureListItemState = { isExpanded: false };

  public render() {
    const { label, featureList, className } = this.props;
    return (
      <>
        <button type="button" className={classnames(styles.accordionFeatureListItem, className)} onClick={this.toggleAccordion}>
          <span className={styles.accordionFeatureListLabel}>{label}</span>
          <Icon className={styles.accordionFeatureListIcon} icon={this.state.isExpanded ? chevronUp : chevronDown} />
        </button>
        {this.state.isExpanded && (
          <FeatureList
            className={classnames({
              [styles.isActive]: this.state.isExpanded
            })}
            featureList={featureList}
          />
        )}
      </>
    );
  }

  private toggleAccordion = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };
}
