import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const MultiSelectCode = (props) => {

  const code = `<MultiSelect
  label={'car manufacturers'}
  items={models}
  selectedItems={selectedModels}
  setSelectedItems={setSelectedModels}
  onSelected={(item) => { /* your code that reacts to single item being selected */ }}
  onUnselected={(item) => { /* your code that reacts to single item being unselected */ }}
  hasSearch={true}
  isItemsOutside={true}
  onCreateNewItem={handleAddNewModel}
  parentContainerRef={parentContainerRef}
></MultiSelect>

...

const handleAddNewModel = (value) => {
  return new Promise((resolve, reject) => {
    const newModel = { name: value };
    !models.some(m => m.name === value) &&
      setModels(oldModels => [...oldModels, newModel]);
    resolve(newModel);
  });
}`

  return (
    <div className='code-section'>
      <div><a href='https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/MultiSelectDemo.jsx' target='_blank'>https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/MultiSelectDemo.jsx</a></div>
      <PrismWrapper code={code} />
    </div>
  )
}