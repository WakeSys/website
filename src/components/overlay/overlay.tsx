import * as React from 'react';
import { Portal } from './portal';
import * as classnames from 'classnames';

const styles = require('./overlay.module.scss');

export interface IOverlay {
  children: React.ReactNode;
  className?: string;
  onCloseClick?: () => void;
}

export class Overlay extends React.Component<IOverlay> {
  public static displayName = 'Modal';

  setScrollElementOverflow = (value: 'hidden' | null = null) => {
    const scrollElement = window.document.scrollingElement as HTMLElement;

    if (scrollElement) {
      scrollElement.style.overflowY = value;
    }
  };

  public componentDidMount() {
    this.setScrollElementOverflow('hidden');

    if (this.props.onCloseClick) {
      document.addEventListener('keyup', this.closeByKeyUp);
    }
  }

  public componentWillUnmount() {
    this.setScrollElementOverflow();

    document.removeEventListener('keyup', this.closeByKeyUp);
  }

  render() {
    const { className, children } = this.props;
    return (
      <Portal container={document.body}>
        <div className={styles.overlay}>
          <div className={styles.backdrop} onClick={this.closeByClick} />
          <div className={classnames(styles.modal, className)}>{children}</div>
        </div>
      </Portal>
    );
  }

  private closeByKeyUp = (evnt: KeyboardEvent): void => {
    if (this.props.onCloseClick && evnt.keyCode === 27) {
      this.props.onCloseClick();
    }
  };

  private closeByClick = (): void => {
    if (this.props.onCloseClick) {
      this.props.onCloseClick();
    }
  };
}
