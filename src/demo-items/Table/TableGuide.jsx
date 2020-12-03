import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const TableGuide = (props) => {

  return (
    <div className='guide'>
      <div className='paragraph'><span>In the code tab there's an example of Table which partly resembles jQuery DataTables. Column and cell configuration is bound to column definition.</span></div>

      <div className='paragraph'><span>By default the toolkit provides 2 cell templates: `PlainTextCell` and `TextAreaCell`.</span></div>

      <div className='paragraph'><span>Creation of custom cell template is very straightforward:</span></div>

      <div className='code-block'>
        <PrismWrapper code={`export const CustomCell = (props) => {
  
  const {
    data, // current row, or in other words — data record
    column, // an item of \`columns\` array — see the code tab
    updateRow, // updates current data record on client-side (pass additional callback to reflect a change on back-end) 
    dataRowsContainerRef // parent container; useful when calculating coordinates — e.g. coordinates of some pop-up
  } = props;

  const {
    style, // style information about current cell — can be looked up in code tab
    onChange: handleChange // callback which you have passed (bound to column definition)
  } = column;

  const value = getCellValue(data, column);

  ...your logic

  return (
    <div
      className='cell'
      style={style}
    >
      
    ...your markup

    </div>
  )
}`
        } />
      </div>

      <div className='paragraph'><span>Auxiliary Rows is a group of additional helper rows rendered per each main row in the same order they follow in `auxiliaryRows` array.</span></div>
      <div className='paragraph'><span>E.g. nested table (`ModelsAvailableRow` component) — as you can see in code tab — can be implemented via auxiliary row feature.</span></div>
      <div className='paragraph'><span>Each item in auxiliaryRows array is a descriptor which combines component and related data with callbacks / methods — all of these are available off `descriptor` object which dwells in props.</span></div>
      <div className='paragraph'><span>Creation of a custom auxiliary row is very straightforward:</span></div>

      <div className='code-block'>
        <PrismWrapper
          code={`export const CustomRow = (props) => {

  const {
    data, // current row, or in other words — data record
    columns, // see \`columns\` array in the code tab
    updateRow, // updates current data record on client-side (pass additional callback to reflect a change on back-end) 
    descriptor, // contains component, data, callbacks / methods (as is stated above in the guide)
    settings, // keeps information about being located in odd or even row group
    dataRowsContainerRef, // parent container; useful when calculating coordinates — e.g. coordinates of some pop-up
  } = props;

  const finalRowClass = getClassName(settings.cssClasses.concat('auxilliary-row')); // in order to distinguish between odd and even row groups

  return (
    <div className={finalRowClass}>

      ...here you can loop through columns if the auxiliary row must replicate main row's layout

      {columns.map((column, i) => (
        ...
      ))}

      ...or use whatever custom layout you want

    </div>
  )
}`}
        />
      </div>

    </div>
  )
}