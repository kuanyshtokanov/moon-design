import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core';

const Example = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Country',
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Phone',
  };

  const inputProps3 = {
    type: 'text',
    inputSize: 'large',
    placeholder: 'Country',
  };

  const inputProps4 = {
    type: 'text',
    inputSize: 'large',
    placeholder: 'Phone',
  };

  const inputProps5 = {
    type: 'text',
    inputSize: 'xlarge',
    placeholder: 'Country',
  };

  const inputProps6 = {
    type: 'text',
    inputSize: 'xlarge',
    placeholder: 'Phone',
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <TextInputGroup
          inputProps={{
            input1: inputProps1,
            input2: inputProps2,
          }}
        />
      </div>
      <div>
        <TextInputGroup
          inputProps={{
            input1: inputProps3,
            input2: inputProps4,
          }}
        />
      </div>
      <div>
        <TextInputGroup
          inputProps={{
            input1: inputProps5,
            input2: inputProps6,
          }}
        />
      </div>
    </div>
  );
};

export default Example;
