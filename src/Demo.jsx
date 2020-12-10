import React, { useRef } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

import './styles.css';
import { Toastr, toastr } from 'feasible-ui';
import { useEffect } from 'react';

import { Section } from './components/demo/Section';
import { ButtonsDemo } from './demo-items/Buttons/ButtonsDemo';
import { ButtonsCode } from './demo-items/Buttons/ButtonsCode';
import { ConfirmationButtonsDemo } from './demo-items/ConfirmationButtons/ConfirmationButtonsDemo';
import { ConfirmationButtonsCode } from './demo-items/ConfirmationButtons/ConfirmationButtonsCode';
import { ToggleDemo } from './demo-items/Toggle/ToggleDemo';
import { ToggleCode } from './demo-items/Toggle/ToggleCode';
import { ToastrNotificationsDemo } from './demo-items/ToastrNotifications/ToastrNotificationsDemo';
import { ToastrNotificationsCode } from './demo-items/ToastrNotifications/ToastrNotificationsCode';
import { TextAreaDemo } from './demo-items/TextArea/TextAreaDemo';
import { TextAreaCode } from './demo-items/TextArea/TextAreaCode';
import { SelectDemo } from './demo-items/Select/SelectDemo';
import { SelectCode } from './demo-items/Select/SelectCode';
import { MultiSelectDemo } from './demo-items/MultiSelect/MultiSelectDemo';
import { MultiSelectCode } from './demo-items/MultiSelect/MultiSelectCode';
import { TagsDemo } from './demo-items/Tags/TagsDemo';
import { TagsCode } from './demo-items/Tags/TagsCode';
import { TableDemo } from './demo-items/Table/TableDemo';
import { TableCode } from './demo-items/Table/TableCode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ToggleGuide } from './demo-items/Toggle/ToggleGuide';
import { ToastrNotificationsGuide } from './demo-items/ToastrNotifications/ToastrNotificationsGuide';
import { TableGuide } from './demo-items/Table/TableGuide';
import { Quickstart } from './Quickstart';

export const Demo = (props) => {

  const parentContainerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      toastr.info('welcome to feasible-ui');
    }, 500);
  }, []);

  const history = useHistory();

  const handleKoalaClick = () => {
    history.push('/koala');
  }

  const koala = require('./img/koala.jpg').default;

  return (

    <React.Fragment>

      <div
        className='main-container'
        ref={parentContainerRef}
      >

        <div className='left'>

          <div className='heading'>
            <span>feasible-ui</span>
          </div>

          <div className='sub-heading'>
            <span>react-based ui component library</span>
          </div>

          <div className='nav'>
            <a target='_blank' rel="noreferrer" href='https://github.com/aliakseiherman/feasible-ui-src'><FontAwesomeIcon icon={faGithub} /></a>
            <Link to="/demo">demo</Link>
            <Link to="/quick-start">quick start</Link>
            <a target='_blank' rel="noreferrer" href='https://github.com/aliakseiherman'>author</a>
            <Link to="/support">support</Link>
          </div>

          <div className='description'>

            <span style={{ color: 'rgb(33 169 25)' }}>extremely lightweight</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: 'rgb(32 126 173)' }}>simple and transparent implementation</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: 'rgb(36 140 73)' }}>written from scratch</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: 'rgb(17 142 132)' }}>not based on other ui libraries</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: 'rgb(49 85 167)' }}>easy to tweak</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: 'rgb(32 134 97)' }}>a starting point for a web app</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: 'rgb(148 59 120)' }}>open-source</span>
          </div>

          <div className='live-demo-with-code'>
            <span>live demo with code: <a target='_blank' rel="noreferrer" href='https://stackblitz.com/edit/feasible-ui-demo'>https://stackblitz.com/edit/feasible-ui-demo</a></span>
          </div>

          <div className='vertical-spacing'></div>

          <div className='koala-left-container'>
            <img onClick={handleKoalaClick} className='koala' width="250" src={koala}></img>
          </div>

        </div>

        <div className='right'>


          <Switch>
            <Route path="/demo">
              <div>
                <Section
                  heading={'BUTTON'}
                  content={{
                    demo: ButtonsDemo,
                    code: ButtonsCode
                  }}
                  style={{ marginTop: '20px' }}
                  parentContainerRef={parentContainerRef}
                ></Section>

                <Section
                  heading={'CONFIRMATION BUTTON'}
                  content={{
                    demo: ConfirmationButtonsDemo,
                    code: ConfirmationButtonsCode
                  }}
                  parentContainerRef={parentContainerRef}
                ></Section>

                <Section
                  heading={'TOGGLE'}
                  content={{
                    demo: ToggleDemo,
                    code: ToggleCode,
                    guide: ToggleGuide
                  }}
                  parentContainerRef={parentContainerRef}
                ></Section>

                <Section
                  heading={'TOASTR NOTIFICATIONS'}
                  content={{
                    demo: ToastrNotificationsDemo,
                    code: ToastrNotificationsCode,
                    guide: ToastrNotificationsGuide
                  }}
                  features={['custom templates']}
                  parentContainerRef={parentContainerRef}
                ></Section>

                <Section
                  heading={'TEXT-AREA (enhanced)'}
                  content={{
                    demo: TextAreaDemo,
                    code: TextAreaCode
                  }}
                  features={['save confirmation', 'optional \'enter\' to save', 'outside click to cancel', '\'esc\' to cancel ']}
                  parentContainerRef={parentContainerRef}
                ></Section>

                <Section
                  heading={'SELECT'}
                  content={{
                    demo: SelectDemo,
                    code: SelectCode
                  }}
                  features={['search', 'clear selection']}
                  parentContainerRef={parentContainerRef}
                ></Section>

                <Section
                  heading={'MULTI-SELECT'}
                  content={{
                    demo: MultiSelectDemo,
                    code: MultiSelectCode
                  }}
                  features={['search', 'clear selection', 'select all', 'optional create new item', 'items displayed outside or inside']}
                  parentContainerRef={parentContainerRef}
                ></Section>

                <Section
                  heading={'TAGS'}
                  content={{
                    demo: TagsDemo,
                    code: TagsCode
                  }}
                  features={['search / auto-complete', 'create new tag', 'optional delete confirmation']}
                  parentContainerRef={parentContainerRef}
                ></Section>

                <Section
                  heading={'TABLE'}
                  content={{
                    demo: TableDemo,
                    code: TableCode,
                    guide: TableGuide
                  }}
                  features={['sorting', 'pagination', 'auxiliary rows', 'nested table (auxiliary rows)']}
                  parentContainerRef={parentContainerRef}
                ></Section>

              </div>

            </Route>
            <Route path="/quick-start">
              <Quickstart />
            </Route>
          </Switch>

          <div className='section'>
            <div className='koala-right-container'>
              <img onClick={handleKoalaClick} className='koala' width="250" src={koala}></img>
            </div>
          </div>


        </div>

      </div>

      <Toastr timeout={5000} />

    </React.Fragment >
  )
}
