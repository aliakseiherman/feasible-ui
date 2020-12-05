import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const TextAreaCode = (props) => {

  const code = `<TextArea
  value={text}
  onChange={(value) => {
    setText(value);
  }}
  isAutoFocus={false}
  isSaveOnEnter={false}
  isFullWidth={false}
  classes={['your-custom-textarea-class']}
  parentContainerRef={parentContainerRef}
></TextArea>`

  return (
    <div className='code-section'>
      <div><a href='https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/TextAreaDemo.jsx' target='_blank'>https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/TextAreaDemo.jsx</a></div>
      <PrismWrapper code={code} />
    </div>
  )
}