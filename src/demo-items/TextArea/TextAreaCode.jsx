import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const TextAreaCode = (props) => {

  const code = `<TextArea
  value={text}
  onChange={(value) => {
    setText(value);
  }}
  parentContainerRef={parentContainerRef}
></TextArea>`

  return (
    <PrismWrapper code={code} />
  )
}