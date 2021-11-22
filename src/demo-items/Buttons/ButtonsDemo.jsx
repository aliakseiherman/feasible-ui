import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGit, faLinux, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../../components/button/Button';

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
                <span><FontAwesomeIcon icon={faGit} /></span>
              </div>
            )}
            onClick={() => { }}
            classes={['secondary']}
          ></Button>

          <Button
            innerMarkup={(
              <div className='icon-button-container'>
                <span><FontAwesomeIcon icon={faReact} /></span>
              </div>
            )}
            onClick={() => { }}
          ></Button>

          <Button
            innerMarkup={(
              <div className='icon-button-container'>
                <span><FontAwesomeIcon icon={faAddressCard} /></span>
              </div>
            )}
            onClick={() => { }}
            isDisabled={true}
          ></Button>

          <Button
            innerMarkup={(
              <div className='icon-button-container'>
                <span className='pr5'><FontAwesomeIcon icon={faFacebook} /></span>
                <span>share</span>
              </div>)}
            onClick={() => { }}
            classes={['primary']}
          ></Button>

        </div>

      </div>
    </div>
  )
}