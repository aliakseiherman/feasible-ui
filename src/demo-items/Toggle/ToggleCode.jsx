import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const ToggleCode = (props) => {

  const code = `const [isEnabled, setIsEnabled] = useState(false);

...

<ToggleButton
  isOn={isEnabled}
  onChange={() => { _setIsEnabled(!isEnabled) }}
></ToggleButton>`

  return (
    <div className='code-section'>
      <div><a href='https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/ToggleDemo.jsx' target='_blank'>https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/ToggleDemo.jsx</a></div>
      <PrismWrapper code={code} />
    </div>
  )
}