import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { TopBar } from '../components/topBar/topBar';
import { Overlay } from '../components/overlay/overlay';

const styles = require('./basicTemplate.module.scss');

interface IBasicTemplateProps {
  children: React.ReactNode;
}

interface IBasicTemplateState {
  isOverlayOpen: boolean;
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

const NAVIGATION_LIST = [
  {
    label: 'Full-size',
    to: '/'
  },
  {
    label: 'Other link',
    to: '/other-link'
  }
];

export class BasicTemplate extends React.Component<IBasicTemplateProps> {
  state: IBasicTemplateState = { isOverlayOpen: false };

  public render() {
    const { children } = this.props;
    return (
      <>
        <Helmet
          title="WakeSys Full-size - Online booking and management solutions for wakeboard cable parks"
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        />
        <TopBar navigationList={NAVIGATION_LIST} label="Free trial" openOverlay={this.openOverlay} />
        {this.state.isOverlayOpen && <Overlay children={<div>swag all day</div>} onCloseClick={this.closeOverlay} />}
        {children}
      </>
    );
  }

  private closeOverlay = () => {
    this.setState({
      isOverlayOpen: false
    });
  };

  private openOverlay = () => {
    this.setState({
      isOverlayOpen: true
    });
  };
}
