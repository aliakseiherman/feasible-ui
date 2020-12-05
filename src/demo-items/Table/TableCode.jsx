import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const TableCode = (props) => {

  const code = `<Table
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
        /* \`row.about\` has changed - reflect changes in ajax request */
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
></Table>`

  return (
    <div className='code-section'>
      <div><a href='https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/TableDemo.jsx' target='_blank'>https://stackblitz.com/edit/feasible-ui-demo?file=src/demo-items/TableDemo.jsx</a></div>
      <PrismWrapper code={code} />
    </div>
  )
}