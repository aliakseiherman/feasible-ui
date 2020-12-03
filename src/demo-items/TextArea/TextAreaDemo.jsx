import React, { useState } from 'react';
import { TextArea } from 'feasible-ui';

export const TextAreaDemo = (props) => {

  const {
    parentContainerRef
  } = props;

  const [text, setText] = useState('');

  return (
    <div className='samples'>

      <div className='sample'>

        <TextArea
          value={text}
          onChange={(value) => {
            setText(value);
          }}
          parentContainerRef={parentContainerRef}
        ></TextArea>

      </div>

    </div>
  )
}