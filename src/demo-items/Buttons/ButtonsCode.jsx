import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const ButtonsCode = (props) => {

  const code = `<Button
  label={'primary'}
  onClick={() => { }}
  classes={['primary']}
></Button>

<Button
  innerMarkup={(
    <div className='icon-button-container'>
      <span><FontAwesomeIcon icon={faLinux} /></span>
    </div>
  )}
  onClick={() => { }}
  classes={['primary']}
></Button>

<Button
  innerMarkup={(
    <div className='icon-button-container'>
      <span><FontAwesomeIcon icon={faFacebook} /></span>
      <span>share</span>
    </div>)}
  onClick={() => { }}
  classes={['primary']}
></Button>`;

  return (
    <PrismWrapper code={code} />
  )
}