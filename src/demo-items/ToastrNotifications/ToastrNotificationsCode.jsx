import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const ToastrNotificationsCode = (props) => {

  const code = `import { toastr } from 'feasible-ui';
  
toastr.success('Here follows the text that indicates something has been done successfully.');
toastr.info('Here follows the text that brings some information to users.');
toastr.warning('Here follows the text that warns users about something harmful that potentially may be done.');
toastr.error('Here follows the text that displays an error.');

toastr.custom({
  template: MessageToast,
  func: () => { /* function injected into MessageToast component */ }
}, 0);`

  return (
    <PrismWrapper code={code} />
  )
}