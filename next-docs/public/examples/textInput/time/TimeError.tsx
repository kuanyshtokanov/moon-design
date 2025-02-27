import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex gap-4 items-end">
    <div className="m-4 w-52">
      <TextInput
        type="time"
        inputSize="medium"
        label="medium"
        placeholder="Placeholder"
        hintText="Error message"
        isError
      />
    </div>
    <div className="m-4 w-52">
      <TextInput
        type="time"
        inputSize="large"
        label="large"
        placeholder="Placeholder"
        hintText="Error message"
        isError
      />
    </div>
    <div className="m-4 w-52">
      <TextInput
        type="time"
        inputSize="xlarge"
        label="xlarge"
        placeholder="Placeholder"
        hintText="Error message"
        isError
      />
    </div>
  </div>
);

export default Example;
