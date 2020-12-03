import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const SelectCode = (props) => {

  const code = `const [models, setModels] = useState([
  { name: 'Audi' },
  { name: 'Alfa Romeo' },
  ...
  { name: 'Volvo' }
]);

const [selectedItem, setSelectedItem] = useState(null);

...

<Select
  items={models}
  selectedItem={selectedItem}
  setSelectedItem={setSelectedItem}
  label={'select car manufacturer'}
  hasSearch={true}
  hasClear={true}
  parentContainerRef={parentContainerRef}
></Select>`

  return (
    <PrismWrapper code={code} />
  )
}