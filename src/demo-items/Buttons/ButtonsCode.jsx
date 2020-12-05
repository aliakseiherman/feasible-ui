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
    <div className='code-section'>
      <div><a href='https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/ButtonsDemo.jsx' target='_blank'>https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/ButtonsDemo.jsx</a></div>
      <PrismWrapper code={code} />
    </div>
  )
}