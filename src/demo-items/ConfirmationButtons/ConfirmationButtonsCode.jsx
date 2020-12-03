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
    <PrismWrapper code={code} />
  )
}