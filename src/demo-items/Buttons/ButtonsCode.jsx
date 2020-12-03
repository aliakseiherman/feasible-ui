import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const ButtonsCode = (props) => {

  const code = `<Button
  label={'primary'}
  onClick={() => { }}
  classes={['primary']}
></Button>

<Button
  innerMarkup={(<span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faLinux} /></span>)}
  onClick={() => {
  }}
  classes={['primary']}
></Button>

<Button
  innerMarkup={(
    <div style={{ fontSize: '20px', display: 'table' }}>
      <FontAwesomeIcon icon={faFacebook} />
      <span style={{ fontSize: '16px', display: 'table-cell', verticalAlign: 'middle', paddingLeft: '5px' }}>share</span>
    </div>)}
  onClick={() => { }}
  classes={['primary']}
></Button>`;

  return (
    <PrismWrapper code={code} />
  )
}