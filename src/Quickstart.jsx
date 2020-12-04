import React from 'react';

export const Quickstart = (props) => {

  return (
    <div className='quickstart'>

      <div className='palette'>
        <div><span>npm i feasible-ui</span></div>
        <div><span>yarn add feasible-ui</span></div>
      </div>

      <div style={{ marginTop: '30px', borderTop: '1px dotted gray', paddingTop: '5px' }}>
        <span style={{ color: '#b7631a' }}>
          If you are looking to <b>modify</b> the look and functionality — download the <b>source code</b> and paste into your project.
        </span>
      </div>

      <div className='palette'>
        <div><span>git clone -b sources https://github.com/aliakseiherman/feasible-ui.git</span></div>
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
        <div style={{ marginTop: '40px' }}>
          <span style={{ color: 'rgb(26 81 183)' }}>Simple as that!</span>
        </div>
      </div>

    </div>
  )
}