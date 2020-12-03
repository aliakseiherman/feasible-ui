import React, { useEffect } from 'react';
import { Button } from 'feasible-ui';
import { useHistory } from 'react-router-dom';

export const Koala = (props) => {

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>

      <div className='page-wrapper'>

        <Button label={'go back'} onClick={() => { history.push('/demo') }} classes={['primary']} />

        <div>
          <span className='page-heading'>During summer 2019-2020 in Australia, thousands of koalas perished in bushfires</span>
        </div>

        <div>
          <div>
            <q>Australia's environment minister says up to 30% of koalas killed in NSW mid-north coast fires</q>

            <br />

            <span>&nbsp;—&nbsp;</span>

            <a href='https://www.theguardian.com/australia-news/2019/dec/27/australias-environment-minister-says-up-to-30-of-koalas-killed-in-nsw-mid-north-coast-fires'>theguardian.com</a>

          </div>
        </div>

        <div>
          <div>
            <q>Over 4000 Koalas are killed each year by cars and dogs.</q>

            <br />

            <span>&nbsp;—&nbsp;</span>

            <a href='https://www.savethekoala.com/about-koalas/threats-koala'>savethekoala.com | Threats to the Koala</a>

          </div>
        </div>

        <div>
          <div>
            <q>Since European settlement, approximately 80% of Koala habitat has been decimated. Of the remaining 20% almost none is protected and most occurs on privately-owned land.</q>

            <br />

            <span>&nbsp;—&nbsp;</span>

            <a href='https://www.savethekoala.com/about-koalas/threats-koala'>savethekoala.com | Threats to the Koala</a>

          </div>
        </div>

        <div style={{ margin: '0' }}>
          <span className='page-heading'>Donations can be made to</span>
        </div>

        <div>
          <div>

            <ul>
              <li>
                <a href='https://www.koalahospital.org.au/act-now/conservation-foundation'>Koala Hospital Port Macquarie</a>
              </li>
              <li>
                <a href='https://www.savethekoala.com/about-koalas/help-save-koalas'>Australian Koala Foundation</a>
              </li>
              <li>
                <a href='https://portstephenskoalas.com.au//'>Port Stephens Koala Sanctuary</a>
              </li>
              <li>
                <a href='https://www.friendsofthekoala.org/'>Friends Of The Koala Inc.</a>
              </li>
              <li>
                <a href='http://www.koalasincare.org.au/'>Koalas In Care Inc.</a>
              </li>
              <li>
                <a href='https://southernkoalarescue.com/'>Southern Koala Resque</a>
              </li>
              <li>
                <a href='https://livingwithkoalas.com.au/home/koala-charities/'>..more</a>
              </li>
            </ul>

          </div>
        </div>

        <div style={{ margin: '0' }}>
          <span className='page-heading'>YouTube</span>
        </div>

        <div>
          <div>

            <ul>
              <li>
                <a href='https://youtu.be/nyAwTuHYgDs'>Koala Hospital <span className='youtube-channel'>Nat Geo WILD</span></a>
              </li>
              <li>
                <a href='https://youtu.be/Q_FicNzI_jk'>Saving Koalas In The 2020 Australian Bushfires <span className='youtube-channel'>Bondi Vet</span></a>
              </li>
              <li>
                <a href='https://youtu.be/lDdFHSoImyo'>The habitat loss of the Koala <span className='youtube-channel'>Awesome Koala</span></a>
              </li>
              <li>
                <a href='https://youtu.be/aNxCMm4c7NI'>Up to 500 koalas could have been killed during a land clearing exercise at a bluegum plantation near Portland in western Victoria <span className='youtube-channel'>Sky News Australia | from February 2, 2020</span></a>
              </li>
            </ul>

          </div>
        </div>

        <div style={{ display: 'block' }}>
          <div>
            <span style={{ color: '#498694', fontFamily: 'Open Sans Regular', fontSize: '14px' }}>If you are an author of a popular package — </span>
            <span style={{ color: 'rgb(156 96 20)', fontFamily: 'Open Sans Regular', fontSize: '14px' }}>you can help via publishing this information on your website so that more people learn about the catastrophe.</span>
          </div>
          <div style={{ marginTop: '5px' }}>
            <span style={{ color: 'rgb(156 96 20)', fontFamily: 'Open Sans Regular', fontSize: '14px' }}>Joint effort is GOLD.</span>
          </div>
        </div>

        <div>
          <span style={{ color: 'gray', fontFamily: 'Open Sans Regular', fontSize: '12px' }}>Thank you!</span>
        </div>

        <Button label={'go back'} onClick={() => { history.push('/demo') }} classes={['primary']} />

      </div>

    </div>
  )
}