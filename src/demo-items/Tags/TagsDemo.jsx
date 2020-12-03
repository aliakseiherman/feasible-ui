import React, { useState } from 'react';
import { Tags } from 'feasible-ui';

export const TagsDemo = (props) => {

  const {
    parentContainerRef
  } = props;

  const carTypeSedan = { name: 'Sedan' };
  const carTypeCoupe = { name: 'Coupe' };
  const carTypeSportsCar = { name: 'Sports Car' };
  const carTypeCrossover = { name: 'Crossover' };
  const carTypeWagon = { name: 'Wagon' };
  const carTypeHatchback = { name: 'Hatchback' };
  const carTypeConvertible = { name: 'Convertible' };
  const carTypeSUV = { name: 'Sport-Utility Vehicle' };
  const carTypeMiniwan = { name: 'Miniwan' };
  const carTypePickupTruck = { name: 'Pickup Truck' };
  const carTypeTruck = { name: 'Truck' };

  const [carTypes, setCarTypes] = useState([
    carTypeSedan,
    carTypeCoupe,
    carTypeSportsCar,
    carTypeCrossover,
    carTypeWagon,
    carTypeHatchback,
    carTypeConvertible,
    carTypeSUV,
    carTypeMiniwan,
    carTypePickupTruck,
    carTypeTruck
  ]);

  const [selectedCarTypes, setSelectedCarTypes] = useState([carTypes[1], carTypes[6], carTypes[3], carTypes[2]]);

  return (
    <div className='samples' style={{ flexDirection: 'column' }}>

      <div className='sample-description'>
        <span>confirmation is optional and can be disabled — see 'guide' section</span>
      </div>

      <div className='sample'>
        <Tags
          selectedTags={selectedCarTypes}
          getTags={() => carTypes}
          onTagAdded={(tag) => {
            setSelectedCarTypes(oldItems => [...oldItems, tag]);
          }}
          onTagRemoved={(tag) => {
            setSelectedCarTypes(selectedCarTypes.filter(t => t !== tag));
          }}
          isConfirmOnDelete={true}
          parentContainerRef={parentContainerRef}
        ></Tags>
      </div>

    </div>
  )
}