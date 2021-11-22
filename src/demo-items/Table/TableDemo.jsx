import React, { useEffect, useState } from 'react';

import { v4 as guid } from 'uuid';
import { ModelsAvailableRow } from '../../components/table-customization/auxiliary-row/ModelsAvailableRow';
import { TagsRow } from '../../components/table-customization/auxiliary-row/TagsRow';
import { TextAreaCell } from '../../components/table/cell/TextAreaCell';
import { OBJECT_PROPERTY_ABOUT, OBJECT_PROPERTY_NAME, SORT_DIRECTION_ASCENDING } from '../../components/table/constants';
import { Table } from '../../components/table/Table';
import { getSortByFn, paginate } from '../../helpers/array-helper';

export const TableDemo = (props) => {

  const {
    parentContainerRef
  } = props;

  const [tableGuid1] = useState(guid());
  const [filterConfig1, setFilterConfig1] = useState(null);
  const [tableGuid2] = useState(guid());
  const [filterConfig2, setFilterConfig2] = useState(null);

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

  const [carBrands, setCarBrands] = useState([
    {
      id: 1,
      name: 'Audi', country: 'Germany',
      carTypes: [carTypeSedan, carTypeCrossover, carTypeHatchback, carTypeSportsCar],
      about: 'Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide.',
      modelsAvailable: [
        {
          name: 'Q7 S line',
          engine: '45 TDI quattro',
          capacity: '3.0',
          power: '249 hp',
          gearbox: '8-Speed Tiptronic',
          color: 'white'
        }, {
          name: 'Q7 S line',
          engine: '45 TDI quattro',
          capacity: '3.0',
          power: '249 hp',
          gearbox: '8-Speed Tiptronic',
          color: 'black'
        }, {
          name: 'Q8',
          engine: '55 TFSI quattro',
          capacity: '3.0',
          power: '340 hp',
          gearbox: '8-Speed Tiptronic',
          color: 'orange'
        }, {
          name: 'A8',
          engine: 'TFSI quattro',
          capacity: '4.0',
          power: '571 hp',
          gearbox: '8-Speed Tiptronic',
          color: 'gray'
        }, {
          name: 'A3 Sedan Basis',
          engine: '35 TFSI',
          capacity: '1.4',
          power: '150 hp',
          gearbox: '6-Speed S tronic',
          color: 'gray'
        },
      ]
    },
    {
      id: 2,
      name: 'Alfa Romeo', country: 'Italy',
      carTypes: [carTypeSedan, carTypeSportsCar],
      about: 'Alfa Romeo Automobiles S.p.A. is an Italian premium car manufacturer. The company was founded on 24 June 1910 in Milan, Italy.'
    },
    {
      id: 3,
      name: 'Acura', country: 'Japan',
      carTypes: [carTypeSedan],
      about: 'Acura is the luxury vehicle division of Japanese automaker Honda. The brand was launched by Honda in the United States and Canada on 27 March 1986, marketing luxury, performance, and high-performance vehicles.'
    },
    {
      id: 4,
      name: 'BMW', country: 'Germany',
      carTypes: [carTypeSedan, carTypeCrossover, carTypeHatchback, carTypeSportsCar, carTypeConvertible],
      about: 'Bayerische Motoren Werke AG, commonly referred to as BMW is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.'
    },
    {
      id: 5,
      name: 'Bentley', country: 'United Kingdom',
      carTypes: [carTypeSedan],
      about: 'Bentley Motors Limited is a British manufacturer and marketer of luxury cars and SUVs—and a subsidiary of the Volkswagen Group since 1998.'
    },
    {
      id: 6,
      name: 'Cadillac', country: 'USA',
      carTypes: [carTypeSedan],
      about: 'The Cadillac Motor Car Division is a division of the American automobile manufacturer General Motors Company (GM) that designs and builds luxury vehicles. Its major markets are the United States, Canada, and China.'
    },
    {
      id: 7,
      name: 'Chevrolet', country: 'USA',
      carTypes: [carTypeSedan, carTypeHatchback],
      about: 'Chevrolet, colloquially referred to as Chevy and formally the Chevrolet Division of General Motors Company, is an American automobile division of the American manufacturer General Motors (GM).'
    },
    {
      id: 8,
      name: 'Chrysler', country: 'USA',
      carTypes: [carTypeSedan],
      about: 'Chrysler (officially FCA US LLC, the first initialism standing for Fiat Chrysler Automobiles) is one of the "Big Three" automobile manufacturers in the United States, headquartered in Auburn Hills, Michigan. The company will be renamed Stellantis once the merger of Fiat Chrysler Automobiles and Peugeot S.A. is completed in the first quarter of 2021.'
    },
    {
      id: 9,
      name: 'Dodge', country: 'USA',
      carTypes: [carTypeSedan],
      about: 'Dodge is an American brand of automobile manufactured by FCA US LLC, based in Auburn Hills, Michigan. Dodge vehicles currently include performance cars, though for much of its existence Dodge was Chrysler\'s mid-priced brand above Plymouth.'
    },
    {
      id: 10,
      name: 'Fiat', country: 'Italy',
      carTypes: [carTypeSedan, carTypeHatchback],
      about: 'Fiat Automobiles S.p.A. (originally FIAT, Italian: Fabbrica Italiana Automobili Torino, lit. \'Italian Automobiles Factory, Turin\') is an Italian automobile manufacturer, a subsidiary of FCA Italy S.p.A., which is part of Fiat Chrysler Automobiles (previously Fiat S.p.A.). Fiat Automobiles was formed in January 2007 when Fiat reorganized its automobile business, and traces its history back to 1899 when the first Fiat automobile, the Fiat 4 HP, was produced.'
    },
    {
      id: 11,
      name: 'Ford', country: 'USA',
      carTypes: [carTypeSedan],
      about: 'Ford Motor Company, commonly known as Ford, is an American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand, and most luxury cars under the Lincoln brand.'
    },
    {
      id: 12,
      name: 'Honda', country: 'Japan',
      carTypes: [carTypeSedan],
      about: 'Honda Motor Company, Ltd. is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, motorcycles, and power equipment.'
    },
    {
      id: 13,
      name: 'Hyundai', country: 'South Korea',
      carTypes: [carTypeSedan],
      about: 'The Hyundai Motor Group is a South Korean multinational conglomerate headquartered in Seoul, South Korea, and it is the largest car manufacturer in the country. According to the Organisation Internationale des Constructeurs d\'Automobiles, it was the world\'s third-largest vehicle manufacturer by production volume in 2017, behind Japanese Toyota and German Volkswagen.'
    },
    {
      id: 14,
      name: 'Infiniti', country: 'Hong Kong',
      carTypes: [carTypeSedan, carTypeHatchback],
      about: 'Infiniti is the Hong Kong-based luxury vehicle division of Japanese automaker Nissan. Infiniti officially started selling vehicles on November 8, 1989, in North America. The marketing network for Infiniti-branded vehicles included dealers in over 50 countries in the 2010s. As of 2020, there are 25 markets served by new car dealers. The main markets are the U.S. and China.'
    },
    {
      id: 15,
      name: 'Jaguar', country: 'United Kingdom',
      carTypes: [carTypeSedan],
      about: 'Jaguar is the luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer with its headquarters in Whitley, Coventry, England. Jaguar Cars was the company that was responsible for the production of Jaguar cars until its operations were fully merged with those of Land Rover to form Jaguar Land Rover on 1 January 2013.'
    },
    {
      id: 16,
      name: 'Jeep', country: 'USA',
      carTypes: [carTypeSedan, carTypeSUV, carTypeCrossover],
      about: 'Jeep is a brand of American automobile and also a division of FCA US LLC (formerly Chrysler Group, LLC), a wholly owned subsidiary of the Italian-American corporation Fiat Chrysler Automobiles. Jeep has been part of Chrysler since 1987, when Chrysler acquired the Jeep brand, along with remaining assets, from its previous owner American Motors Corporation (AMC).'
    },
    {
      id: 17,
      name: 'Kia', country: 'South Korea',
      carTypes: [carTypeSedan, carTypeHatchback],
      about: 'Kia Motors Corporation, commonly known as Kia Motors is a South Korean multinational automotive manufacturer headquartered in Seoul. It is South Korea\'s second-largest automobile manufacturer following the Hyundai Motor Company, with sales of over 2.8 million vehicles in 2019.'
    },
    {
      id: 18,
      name: 'Land Rover', country: 'United Kingdom',
      carTypes: [carTypeSedan],
      about: 'Land Rover is a British brand of predominantly four-wheel drive, off-road capable vehicles, that is owned by multinational car manufacturer Jaguar Land Rover (JLR), since 2008 a subsidiary of India\'s Tata Motors. JLR currently builds Land Rovers in Brazil, China, India, Slovakia, and the United Kingdom.'
    },
    {
      id: 19,
      name: 'Lexus', country: 'Japan',
      carTypes: [carTypeSedan],
      about: 'Lexus is the luxury vehicle division of the Japanese automaker Toyota. The Lexus brand is marketed in more than 70 countries and territories worldwide and is Japan\'s largest-selling make of premium cars. It has ranked among the 10 largest Japanese global brands in market value. Lexus is headquartered in Nagoya, Japan. Operational centers are located in Brussels, Belgium, and Plano, Texas, United States.'
    },
    {
      id: 20,
      name: 'Mazda', country: 'USA',
      carTypes: [carTypeSedan],
      about: 'Mazda Motor Corporation is a Japanese multinational automaker based in Fuchū, Aki District, Hiroshima Prefecture, Japan. In 2015, Mazda produced 1.5 million vehicles for global sales, the majority of which (nearly 1 million) were produced in the company\'s Japanese plants, with the remainder coming from a variety of other plants worldwide. In 2015, Mazda was the fifteenth largest automaker by production worldwide.'
    },
    {
      id: 21,
      name: 'Mercedes-Benz', country: 'Germany',
      carTypes: [carTypeSedan, carTypeCrossover, carTypeHatchback, carTypeSportsCar, carTypeTruck, carTypeConvertible],
      about: 'Mercedes-Benz is both a German automotive marque and, from late 2019 onwards, a subsidiary (Mercedes-Benz AG) of Daimler AG. Mercedes-Benz is known for producing luxury vehicles and commercial vehicles. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.'
    },
    {
      id: 22,
      name: 'Mitsubishi', country: 'Japan',
      carTypes: [carTypeSedan],
      about: 'The Mitsubishi Group is a group of autonomous Japanese multinational companies in a variety of industries. Founded by Iwasaki Yatarō in 1870, the Mitsubishi Group historically descended from the Mitsubishi zaibatsu, a unified company which existed from 1870 to 1946. The company was disbanded during the occupation of Japan following World War II.'
    },
    {
      id: 23,
      name: 'Nissan', country: 'Japan',
      carTypes: [carTypeSedan],
      about: 'The Nissan Motor Company, Ltd. is a Japanese multinational automobile manufacturer headquartered in Nishi-ku, Yokohama, Japan. The company sells its cars under the Nissan, Infiniti, and Datsun brands with in-house performance tuning products labelled Nismo. The company traces its name to the Nissan zaibatsu, now called Nissan Group.'
    },
    {
      id: 24,
      name: 'Porsche', country: 'Germany',
      carTypes: [carTypeSedan],
      about: 'Dr.-Ing. h.c. F. Porsche AG, usually shortened to Porsche AG is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans. The headquarters of Porsche AG is in Stuttgart, and the company is owned by Volkswagen AG, a controlling stake of which is owned by Porsche Automobil Holding SE. Porsche\'s current lineup includes the 718 Boxster/Cayman, 911, Panamera, Macan, Cayenne and Taycan.'
    },
    {
      id: 25,
      name: 'Rolls-Royce', country: 'United Kingdom',
      carTypes: [carTypeSedan],
      about: 'Rolls-Royce Motor Cars Limited is a British luxury automobile maker. A wholly owned subsidiary of German group BMW, it was established in 1998 after BMW was licensed the rights to the Rolls-Royce brand name and logo from Rolls-Royce plc and acquired the rights to the Spirit of Ecstasy and Rolls-Royce grill shape trademarks from Volkswagen AG.'
    },
    {
      id: 26,
      name: 'Saab', country: 'Sweden',
      carTypes: [carTypeSedan],
      about: 'Saab AB  a Swedish aerospace and defence company, founded in 1937. From 1947 to 1990 it was the parent company of automobile manufacturer Saab Automobile. Between 1968 and 1995 the company was in a merger with commercial vehicle manufacturer Scania-Vabis, known as Saab-Scania. The two were de-merged in 1995 by the new owners, Investor AB.'
    },
    {
      id: 27,
      name: 'Smart', country: 'Germany',
      carTypes: [carTypeSedan],
      about: 'Smart is a German automotive brand and division of Daimler AG. The marque is based in Böblingen, Germany. It produces microcars and subcompacts, primarily the Fortwo and Forfour. The primary assembly plant is the Smartville in Hambach, France. Renault-owned Revoz, based in Novo Mesto, Slovenia, has also assembled Smart vehicles. Smart is marketed in 46 countries around the world, and production of the Fortwo had surpassed 1.7 million units by early 2015.'
    },
    {
      id: 28,
      name: 'Subaru', country: 'Japan',
      carTypes: [carTypeSedan],
      about: 'Subaru is the automobile manufacturing division of Japanese transportation conglomerate Subaru Corporation (formerly known as Fuji Heavy Industries), the twenty-second largest automaker by production worldwide in 2012.'
    },
    {
      id: 29,
      name: 'Suzuki', country: 'Japan',
      carTypes: [carTypeSedan],
      about: 'Suzuki Motor Corporation is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu. Suzuki manufactures automobiles, four-wheel drive vehicles, motorcycles, all-terrain vehicles (ATVs), outboard marine engines, wheelchairs and a variety of other small internal combustion engines. In 2016, Suzuki was the eleventh biggest automaker by production worldwide. Suzuki has over 45,000 employees and has 35 production facilities in 23 countries, and 133 distributors in 192 countries. The worldwide sales volume of automobiles is the world\'s tenth largest, while domestic sales volume is the third largest in the country.'
    },
    {
      id: 30,
      name: 'Tesla', country: 'USA',
      carTypes: [carTypeSedan],
      about: 'Tesla, Inc. (formerly Tesla Motors, Inc.) is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla\'s current products include electric cars (the Model S, Model 3, Model X, and Model Y), battery energy storage from home to grid scale (the Powerwall, Powerpack, and Megapack), solar products (solar panels and solar roof tiles) and related products and services.'
    },
    {
      id: 31,
      name: 'Toyota', country: 'Japan',
      carTypes: [carTypeSedan, carTypeHatchback],
      about: 'Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan. In 2017, Toyota\'s corporate structure consisted of 364,445 employees worldwide and, as of December 2019, was the tenth-largest company in the world by revenue. Toyota is the largest automobile manufacturer in Japan, and the second-largest in the world behind Volkswagen, based on 2018 unit sales. Toyota was the world\'s first automobile manufacturer to produce more than 10 million vehicles per year, which it has done since 2012, when it also reported the production of its 200 millionth vehicle. As of July 2014, Toyota was the largest listed company in Japan by market capitalization (worth more than twice as much as number 2-ranked SoftBank) and by revenue.'
    },
    {
      id: 32,
      name: 'Volkswagen', country: 'Germany',
      carTypes: [carTypeSedan, carTypeCrossover, carTypeHatchback],
      about: 'Volkswagen  a German automaker founded in 1937 by the German Labour Front, known for the iconic Beetle and headquartered in Wolfsburg. It is the flagship brand of the Volkswagen Group, the largest automaker by worldwide sales in 2016 and 2017. The group\'s biggest market is in China, which delivers 40% of its sales and profits.'
    },
    {
      id: 33,
      name: 'Volvo', country: 'Sweden',
      carTypes: [carTypeSedan, carTypeCrossover, carTypeTruck],
      about: 'The Volvo Group is a Swedish multinational manufacturing company headquartered in Gothenburg. While its core activity is the production, distribution and sale of trucks, buses and construction equipment, Volvo also supplies marine and industrial drive systems and financial services. In 2016, it was the world\'s second largest manufacturer of heavy-duty trucks.'
    }
  ]);

  const getTableData = (filterConfig) => {

    if (!filterConfig) {
      return [];
    }

    let carBrands2 = carBrands;
    carBrands2 = carBrands2.sort(getSortByFn(filterConfig.columnName));

    if (!filterConfig.isAscending) {
      carBrands2 = carBrands2.reverse();
    }

    return paginate(carBrands2, filterConfig.size, filterConfig.page);
  }

  const [tableData1, setTableData1] = useState(getTableData(filterConfig1));
  const [tableData2, setTableData2] = useState(getTableData(filterConfig2));

  useEffect(() => {
    setTableData1(getTableData(filterConfig1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterConfig1]);

  useEffect(() => {
    setTableData2(getTableData(filterConfig2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterConfig2]);

  const handleTagAdded = (data, tag) => {
    return new Promise((resolve, reject) => {
      !data.carTypes.some(type => type.name === tag.name) &&
        data.carTypes.push(tag);

      !carTypes.some(type => type.name === tag.name) &&
        setCarTypes(oldItems => [...oldItems, tag]);

      setCarBrands(carBrands.map((r) => (r === data) ? data : r));

      resolve();
    });
  }

  const handleTagRemoved = (data, tag) => {
    return new Promise((resolve, reject) => {
      data.carTypes = data.carTypes.filter(type => type.name !== tag.name);

      setCarBrands(carBrands.map((r) => (r === data) ? data : r));

      resolve();
    });
  }

  return (
    <div className='samples' style={{ flexDirection: 'column' }}>

      <div className='sample-description'>
        <span>advanced variant of a table displaying controls inside cells and auxiliary rows (nested table is a custom template passed as auxiliary row — see the code section for more info)</span>
      </div>

      <div className='sample' style={{ width: '100%', marginBottom: '50px' }}>
      <Table
          guid={tableGuid2}
          columns={[
            {
              name: 'Car Brand',
              objectProperty: OBJECT_PROPERTY_NAME,
              style: { flex: '0 0 100px' },
              isSortable: true
            }, {
              name: 'About',
              objectProperty: OBJECT_PROPERTY_ABOUT,
              style: { flex: '7' },
              isSortable: true,
              template: TextAreaCell,
              onChange: (row) => {
                /* `row.about` has changed - reflect changes in ajax request */
              }
            }
          ]}
          auxiliaryRows={[
            {
              component: TagsRow,
              getTags: () => carTypes,
              onTagAdded: handleTagAdded,
              onTagRemoved: handleTagRemoved
            }, {
              component: ModelsAvailableRow
            }
          ]}
          defaultSize={5}
          defaultSortColumnName={OBJECT_PROPERTY_NAME}
          defaultSortDirection={SORT_DIRECTION_ASCENDING}
          setFilterConfig={setFilterConfig2}
          filterConfig={filterConfig2}
          data={tableData2}
          totalCount={carBrands.length}
        ></Table>
      </div>

      <div className='sample-description'>
        <span>simplified variant of a table displaying the same data</span>
      </div>

      <div className='sample' style={{ width: '100%' }}>
        <Table
          guid={tableGuid1}
          columns={[
            {
              name: 'Car Brand',
              objectProperty: OBJECT_PROPERTY_NAME,
              style: { flex: '0 0 100px' },
              isSortable: true
            }, {
              name: 'About',
              objectProperty: OBJECT_PROPERTY_ABOUT,
              style: { flex: '7' },
              isSortable: true
            }
          ]}
          defaultSize={5}
          defaultSortColumnName={OBJECT_PROPERTY_NAME}
          defaultSortDirection={SORT_DIRECTION_ASCENDING}
          setFilterConfig={setFilterConfig1}
          filterConfig={filterConfig1}
          data={tableData1}
          totalCount={carBrands.length}
        ></Table>
      </div>

    </div>
  )
}