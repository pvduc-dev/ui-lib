import React, { useState } from 'react';
import { Button } from '@pvduc/button';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayProvider,
  OverlayContainer
} from '@react-aria/overlays';
import { Dialog } from "../src";

export default {
  title: 'Dialog'
};

export const Template = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonClickHandler = () => {
    setIsOpen((prevState => !prevState));
  };

  const closeDialog = () => {
    setIsOpen((prevState => !prevState));
  };
  return (
    <OverlayProvider>
      <>
        <button
          type="button"
          onClick={buttonClickHandler}
        >
          Open dialog
        </button>
        {isOpen && (
          <OverlayContainer>
            <Dialog>
              Something went wrong
              <button
                type="button"
                onClick={closeDialog}
              >
                Close dialog
              </button>
            </Dialog>
          </OverlayContainer>
        )}
      </>
    </OverlayProvider>
  );
};
