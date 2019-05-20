import React, { useState } from 'react';
import YouTube from 'react-youtube';

import { Overlay } from '../overlay/overlay';
import { Icon } from '../icon/icon';
import { play } from '../icon/iconList';

const styles = require('./referenceTile.module.scss');

export interface IReferenceTileProps {
  imageUrl: string;
  altAttribute: string;
  youtubeId?: string;
  href?: string;
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

export const ReferenceTileItem: React.FunctionComponent<IReferenceTileProps> = ({ imageUrl, altAttribute, youtubeId, href }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const onOpenOverlayClick = () => {
    setIsOverlayVisible(true);
  };

  const onCloseByClick = () => {
    setIsOverlayVisible(false);
  };

  const opts: IYoutube = {
    height: '540',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };
  return (
    <>
      {youtubeId ? (
        <div onClick={onOpenOverlayClick} className={styles.referenceTile}>
          <img className={styles.referenceTileImage} src={imageUrl} alt={altAttribute} />
          {youtubeId && (
            <button className={styles.referenceTileButton}>
              <span className={styles.referenceTileIconWrapper}>
                <Icon className={styles.referenceTileIcon} icon={play} />
              </span>
              Watch video
            </button>
          )}
        </div>
      ) : (
        <a href={href} className={styles.referenceTile} target="_blank" rel="noopener noreferrer">
          <img className={styles.referenceTileImage} src={imageUrl} alt={altAttribute} />
        </a>
      )}
      {isOverlayVisible && (
        <Overlay onCloseClick={onCloseByClick} className={styles.referenceTileOverlay}>
          <YouTube opts={opts} videoId={youtubeId} onEnd={() => setIsOverlayVisible(false)} />
        </Overlay>
      )}
    </>
  );
};
