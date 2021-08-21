import React from 'react';
import { TextField } from '../src';

export default {
  title: 'TextField'
};

export const Template = () => (
  <>
    <div
      style={{width: '320px'}}
    >
      <TextField
        label="Email"
        placeholder='pvduc.dev@gmail.com'
      />
    </div>
    <div
      style={{width: '320px', marginTop: '24px'}}
    >
      <TextField
        label="Password"
        type="password"
      />
    </div>
  </>
);
