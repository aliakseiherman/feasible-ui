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
    <PrismWrapper code={code} />
  )
}