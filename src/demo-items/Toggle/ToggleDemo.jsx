import React, { useState } from 'react';
import { ToggleButton } from '../../components/button/ToggleButton';

export const ToggleDemo = (props) => {

  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className='samples'>

      <div className='sample'>
        <ToggleButton
          isOn={isEnabled}
          onChange={() => { setIsEnabled(!isEnabled) }}
        ></ToggleButton>
      </div>

    </div>
  )
}