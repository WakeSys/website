import * as React from 'react';
import { createPortal } from 'react-dom';

export interface IPortal {
  container: HTMLElement;
  children: React.ReactNode;
}

export class Portal extends React.Component<IPortal> {
  public render() {
    const { children, container } = this.props;
    return createPortal(children, container);
  }
}
