import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const ToggleGuide = (props) => {

  return (
    <div className='guide'>
      <div className='paragraph'><span>Subscribe to `isEnabled` variable to detect a change:</span></div>

      <div className='code-block'>
        <PrismWrapper
          code={`const [isEnabled, setIsEnabled] = useState(false);
        
const _setIsEnabled = (value) => {
  setIsEnabled(value);

  /* your custom logic goes here */
}`}
        />
      </div>
    </div>
  )
}