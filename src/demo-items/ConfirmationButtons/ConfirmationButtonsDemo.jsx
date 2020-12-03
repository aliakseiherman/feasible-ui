import React from 'react';
import { ConfirmationButton, toastr } from 'feasible-ui';

export const ConfirmationButtonsDemo = (props) => {

  const {
    parentContainerRef
  } = props;

  return (
    <div className='samples'>

      <div className='sample'>

        <ConfirmationButton
          label={'delete'}
          onConfirm={() => {
            toastr.info('Record deleted.')
          }}
          parentContainerRef={parentContainerRef}
        ></ConfirmationButton>

      </div>

      <div className='sample'>

        <ConfirmationButton
          label={'delete'}
          classes={['primary']}
          onConfirm={() => {
            toastr.info('Record deleted.')
          }}
          parentContainerRef={parentContainerRef}
        ></ConfirmationButton>

      </div>

      <div className='sample'>

        <ConfirmationButton
          label={'delete'}
          classes={['secondary']}
          onConfirm={() => {
            toastr.info('Record deleted.')
          }}
          parentContainerRef={parentContainerRef}
        ></ConfirmationButton>

      </div>

      <div className='sample'>

        <ConfirmationButton
          label={'delete (disabled)'}
          isDisabled={true}
          onConfirm={() => {
            toastr.info('Record deleted.')
          }}
          parentContainerRef={parentContainerRef}
        ></ConfirmationButton>

      </div>

    </div>
  )
}