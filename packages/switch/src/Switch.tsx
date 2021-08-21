import React, { FC } from 'react';
import { SwitchAria } from '@react-aria/switch';

import './switch.css';

interface SwitchProps {

}

const Switch: FC<SwitchProps> = () => (
    <>
      <input
        className="switch"
        type='checkbox'
      />
    </>
  );

export { Switch };
