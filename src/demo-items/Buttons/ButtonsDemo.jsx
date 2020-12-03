import React from 'react';
import { Button } from 'feasible-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGit, faLinux, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

export const ButtonsDemo = (props) => {

  const {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    parentContainerRef
  } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='samples' style={{ marginBottom: '10px' }}>

        <div className='sample'>

          <Button
            label={'primary'}
            onClick={() => { }}
            classes={['primary']}
          ></Button>

        </div>

        <div className='sample'>

          <Button
            label={'secondary'}
            onClick={() => { }}
            classes={['secondary']}
          ></Button>

        </div>

        <div className='sample'>

          <Button
            label={'default'}
            onClick={() => { }}
          ></Button>

        </div>

        <div className='sample'>

          <Button
            label={'disabled'}
            onClick={() => {
            }}
            isDisabled={true}
          ></Button>

        </div>

      </div>

      <div className='samples'>

        <div className='sample'>

          <Button
            innerMarkup={(<span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faLinux} /></span>)}
            onClick={() => { }}
            classes={['primary']}
          ></Button>

          <Button
            innerMarkup={(<span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faGit} /></span>)}
            onClick={() => { }}
            classes={['secondary']}
          ></Button>

          <Button
            innerMarkup={(<span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faReact} /></span>)}
            onClick={() => { }}
          ></Button>

          <Button
            innerMarkup={(<span style={{ fontSize: '20px' }}><FontAwesomeIcon icon={faAddressCard} /></span>)}
            onClick={() => { }}
            isDisabled={true}
          ></Button>

          <Button
            innerMarkup={(
              <div style={{ fontSize: '20px', display: 'table' }}>
                <FontAwesomeIcon icon={faFacebook} />
                <span style={{ fontSize: '14px', display: 'table-cell', verticalAlign: 'middle', paddingLeft: '5px' }}>share</span>
              </div>)}
            onClick={() => { }}
            classes={['primary']}
          ></Button>

        </div>

      </div>
    </div>
  )
}