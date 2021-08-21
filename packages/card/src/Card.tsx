import React, { FC } from 'react';
import propTypes from 'prop-types';

const Card: FC = ({children}) => (
  <div
    className="card"
  >
    {children}
  </div>
);

export { Card };
