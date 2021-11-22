import React from 'react';
import { Button } from '../../components/button/Button';
import { MessageToast } from '../../components/toastr-customization/MessageToast';
import { toastr } from '../../components/toastr/toastr-service';

export const ToastrNotificationsDemo = (props) => {

  return (
    <div className='samples' style={{ flexDirection: 'column' }}>

      <div className='sample-description'>
        <span>'custom toast' demonstrates custom templates feature</span>
      </div>

      <div className='sample'>

        <Button
          label={'success'}
          onClick={() => {
            toastr.success('Here follows the text that indicates something has been done successfully.');
          }}
          classes={['primary']}
        ></Button>

        <Button
          label={'info'}
          onClick={() => {
            toastr.info('Here follows the text that brings some information to users.');
          }}
          classes={['primary']}
        ></Button>

        <Button
          label={'warning'}
          onClick={() => {
            toastr.warning('Here follows the text that warns users about something harmful that potentially may be done.');
          }}
          classes={['primary']}
        ></Button>

        <Button
          label={'error'}
          onClick={() => {
            toastr.error('Here follows the text that displays an error.');
          }}
          classes={['secondary']}
        ></Button>

        <Button
          label={'custom toast'}
          onClick={() => {
            toastr.custom({
              template: MessageToast,
              func: () => { }
            }, 0);
          }}
          classes={['secondary']}
        ></Button>

      </div>

    </div>
  )
}