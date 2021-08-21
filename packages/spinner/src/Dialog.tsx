import React, { FC, useRef } from 'react';
import {
  useOverlay,
  usePreventScroll,
  useModal,
} from '@react-aria/overlays';
import {useDialog} from '@react-aria/dialog';
import {FocusScope} from '@react-aria/focus';

const Dialog: FC<any> = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, children} = props;

  const ref = useRef();
  const {overlayProps, underlayProps} = useOverlay(props, ref);

  usePreventScroll();
  const {modalProps} = useModal();

  const {dialogProps, titleProps} = useDialog(props, ref);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...underlayProps}
    >
      <FocusScope
        contain
        restoreFocus
        autoFocus
      >
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          style={{
            background: 'white',
            color: 'black',
            padding: 30
          }}
        >
          <h3
            {...titleProps}
            style={{marginTop: 0}}
          >
            {title}
          </h3>
          {children}
        </div>
      </FocusScope>
    </div>
  );
};

export { Dialog };
