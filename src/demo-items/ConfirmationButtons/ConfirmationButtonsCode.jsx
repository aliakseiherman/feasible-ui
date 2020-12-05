import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const ConfirmationButtonsCode = (props) => {

  const code = `<ConfirmationButton
  label={'delete'}
  classes={['primary']}
  onConfirm={() => { toastr.info('Record deleted.') }}
  parentContainerRef={parentContainerRef}
></ConfirmationButton>`

  return (
    <div className='code-section'>
      <div><a href='https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/ConfirmationButtonsDemo.jsx' target='_blank'>https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/ConfirmationButtonsDemo.jsx</a></div>
      <PrismWrapper code={code} />
    </div>
  )
}