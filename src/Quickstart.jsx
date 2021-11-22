import React from 'react';

export const Quickstart = (props) => {

  return (
    <div className='quickstart'>

      <div style={{ paddingTop: '5px' }}>
        <span style={{ color: '#b7631a' }}>
          Download the <b>source code</b> and paste into your project.
        </span>
      </div>

      <div className='palette'>
        <div><span>git clone https://github.com/aliakseiherman/feasible-ui-src.git</span></div>
      </div>

      <div className='install-manually'>
        <div>
          <div>
            <div>
              <span>Folders to be copied:</span>
            </div>
          </div>
          <div>
            <div className='folder1'>/components</div>
            <div className='folder1'>/helpers</div>
            <div className='folder1'>/assets</div>
          </div>
        </div>
      </div>

    </div>
  )
}