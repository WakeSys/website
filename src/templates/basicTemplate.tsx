import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { TopBar } from '../components/topBar/topBar';
import { Overlay } from '../components/overlay/overlay';
import { Footer } from '../components/footer/footer';

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
    label: 'Aqua-park',
    to: '/aqua-park'
  },
  {
    label: 'Surf-park',
    to: '/surf-park'
  },
  {
    label: 'References',
    to: '/references'
  }
];

export class BasicTemplate extends React.Component<IBasicTemplateProps> {
  public state: IBasicTemplateState = { isOverlayOpen: false };

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
        <Footer />
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
