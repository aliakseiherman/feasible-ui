import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const TagsCode = (props) => {

  const code = `<Tags
  selectedTags={selectedCarTypes}
  getTags={() => carTypes}
  onTagAdded={(tag) => {
    setSelectedCarTypes(oldItems => [...oldItems, tag]);
  }}
  onTagRemoved={(tag) => {
    setSelectedCarTypes(selectedCarTypes.filter(t => t !== tag));
  }}
  parentContainerRef={parentContainerRef}
></Tags>`

  return (
    <div className='code-section'>
      <div><a href='https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/TagsDemo.jsx' target='_blank'>https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/TagsDemo.jsx</a></div>
      <PrismWrapper code={code} />
    </div>
  )
}