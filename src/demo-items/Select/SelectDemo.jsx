import React, { useState } from 'react';
import { Select } from '../../components/select/Select';

export const SelectDemo = (props) => {

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

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='samples'>

      <div className='sample'>
        <Select
          items={models}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          label={'select car manufacturer'}
          hasSearch={true}
          hasClear={true}
          parentContainerRef={parentContainerRef}
        ></Select>
      </div>

    </div>
  )
}