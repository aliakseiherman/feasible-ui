import React, { useState } from 'react';
import { MultiSelect } from '../../components/multi-select/MultiSelect';

export const MultiSelectDemo = (props) => {

  const {
    parentContainerRef
  } = props;

  const [models, setModels] = useState([
    { name: 'Audi' },
    { name: 'Alfa Romeo' },
    { name: 'Acura' },
    { name: 'BMW' },
    { name: 'Bentley' },
    { name: 'Cadillac' },
    { name: 'Chevrolet' },
    { name: 'Chrysler' },
    { name: 'Dodge' },
    { name: 'Fiat' },
    { name: 'Ford' },
    { name: 'Honda' },
    { name: 'Hyundai' },
    { name: 'Infiniti' },
    { name: 'Jaguar' },
    { name: 'Jeep' },
    { name: 'Kia' },
    { name: 'Land Rover' },
    { name: 'Lexus' },
    { name: 'Mazda' },
    { name: 'Mercedes-Benz' },
    { name: 'Mitsubishi' },
    { name: 'Nissan' },
    { name: 'Porsche' },
    { name: 'Rolls-Royce' },
    { name: 'Saab' },
    { name: 'Smart' },
    { name: 'Subaru' },
    { name: 'Suzuki' },
    { name: 'Tesla' },
    { name: 'Toyota' },
    { name: 'Volkswagen' },
    { name: 'Volvo' }
  ]);

  const [selectedModels1, setSelectedModels1] = useState(models.filter(x => !['Alfa Romeo', 'Suzuki'].includes(x.name)));
  const [selectedModels2, setSelectedModels2] = useState([]);

  const handleAddNewModel = (value) => {
    return new Promise((resolve, reject) => {
      const newModel = { name: value };
      !models.some(m => m.name === value) &&
        setModels(oldModels => [...oldModels, newModel]);
      resolve(newModel);
    });
  }

  return (
    <div>
      <div className='samples' style={{ flexDirection: 'column' }}>

        <div className='sample-description'>
          <span>selected items displayed outside; to unselect an item — click or tap on it</span>
        </div>

        <div className='sample'>
          <MultiSelect
            label={'car manufacturers'}
            items={models}
            selectedItems={selectedModels1}
            setSelectedItems={setSelectedModels1}
            onSelected={(item) => { /* your code that reacts to single item being selected */ }}
            onUnselected={(item) => { /* your code that reacts to single item being unselected */ }}
            hasSearch={true}
            isItemsOutside={true}
            onCreateNewItem={handleAddNewModel}
            parentContainerRef={parentContainerRef}
          ></MultiSelect>
        </div>

      </div>

      <br />

      <div className='samples' style={{ flexDirection: 'column' }}>

        <div className='sample-description'>
          <span>below is an example of multi-select with items kept inside only</span>
        </div>

        <div className='sample'>
          <MultiSelect
            label={'car manufacturers'}
            items={models}
            selectedItems={selectedModels2}
            setSelectedItems={setSelectedModels2}
            onSelected={(item) => { /* your code that reacts to single item being selected */ }}
            onUnselected={(item) => { /* your code that reacts to single item being unselected */ }}
            hasSearch={true}
            hasClear={true}
            onCreateNewItem={handleAddNewModel}
            parentContainerRef={parentContainerRef}
          ></MultiSelect>
        </div>

      </div>
    </div>
  )
}