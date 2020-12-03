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
    <PrismWrapper code={code} />
  )
}