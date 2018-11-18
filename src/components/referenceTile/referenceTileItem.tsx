import * as React from 'react';
import YouTube from 'react-youtube';

import { Overlay } from '../overlay/overlay';
import { Icon } from '../icon/icon';
import { play } from '../icon/iconList';

const styles = require('./referenceTile.module.scss');

export interface IReferenceTileProps {
  imageUrl: string;
  altAttribute: string;
  youtubeId?: string;
}

interface IYoutube {
  height?: string;
  width?: string;
  playerVars?: {
    autoplay?: 0 | 1;
  };
}

interface IReferenceTileState {
  isOverlayVisible: boolean;
}

export class ReferenceTileItem extends React.Component<IReferenceTileProps, IReferenceTileState> {
  public state = {
    isOverlayVisible: false
  };

  public render() {
    const { imageUrl, altAttribute, youtubeId } = this.props;
    const opts: IYoutube = {
      height: '540',
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <>
        <div onClick={this.onOpenOverlayClick} className={styles.referenceTile}>
          <img className={styles.referenceTileImage} src={imageUrl} alt={altAttribute} />
          <button className={styles.referenceTileButton}>
            <span className={styles.referenceTileIconWrapper}>
              <Icon className={styles.referenceTileIcon} icon={play} />
            </span>
            Watch video
          </button>
        </div>
        {this.state.isOverlayVisible && (
          <Overlay onCloseClick={this.onCloseByClick} className={styles.referenceTileOverlay}>
            <YouTube opts={opts} videoId="BsuGRTDEUGM" />
          </Overlay>
        )}
      </>
    );
  }

  private onOpenOverlayClick = () => {
    this.setState({
      isOverlayVisible: true
    });
  };

  private onCloseByClick = () => {
    this.setState({
      isOverlayVisible: false
    });
  };
}
