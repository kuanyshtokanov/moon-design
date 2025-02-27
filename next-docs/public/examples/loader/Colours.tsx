import React from 'react';
import { Loader } from '@heathmont/moon-core';
import { Inline } from '@heathmont/moon-components';

const Example = () => (
  <Inline>
    <Loader />
    <Loader color="dodoria.100" />
    <Loader color="trunks.100" />
    <Loader color="raditz.100" />
  </Inline>
);

export default Example;
