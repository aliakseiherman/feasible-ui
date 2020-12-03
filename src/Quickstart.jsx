import React from 'react';

export const Quickstart = (props) => {

  return (
    <div className='quickstart'>

      <div className='palette'>
        <div><span>npm install feasible-ui</span></div>
        <div><span>yarn add feasible-ui</span></div>
      </div>

      <div style={{ marginTop: '30px', borderTop: '1px dotted gray', paddingTop: '5px' }}>
        <span style={{ color: '#b7631a' }}>
          If you are looking to <b>modify</b> the look and functionality — download the <a href='https://github.com/aliakseiherman/feasible-ui'>source code</a> and paste into your project.
        </span>
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
            <div className='folder1'>/font</div>
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <span style={{ color: 'rgb(26 81 183)' }}>Simple as that!</span>
        </div>
      </div>

    </div>
  )
}