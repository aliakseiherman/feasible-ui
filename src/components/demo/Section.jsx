import React, { useEffect, useState } from 'react';

export const Section = (props) => {

  const {
    style,
    heading,
    content,
    features,
    parentContainerRef
  } = props;

  const {
    demo: Demo,
    code: Code,
    guide: Guide
  } = content;

  const [buttonStyles, setButtonStyles] = useState({
    demo: {},
    code: {},
    guide: {},
  });

  const [sectionStyles, setSectionStyles] = useState({
    demo: { display: 'none' },
    code: { display: 'none' },
    guide: { display: 'none' },
  });

  useEffect(() => {
    setSectionStyles({
      demo: { display: 'flex' },
      code: { display: 'none' },
      guide: { display: 'none' },
    });
    setButtonStyles({
      demo: { backgroundColor: 'black', color: 'white' },
      code: {},
      guide: {},
    });
  }, []);

  const handleSwitchView = (value) => {
    switch (value) {
      case 'demo':
        if (Demo) {
          setSectionStyles({
            demo: { display: 'flex' },
            code: { display: 'none' },
            guide: { display: 'none' },
          });
          setButtonStyles({
            demo: { backgroundColor: 'black', color: 'white' },
            code: {},
            guide: {},
          });
        }
        break;
      case 'code':
        if (Code) {
          setSectionStyles({
            demo: { display: 'none' },
            code: { display: 'flex' },
            guide: { display: 'none' },
          });
          setButtonStyles({
            demo: {},
            code: { backgroundColor: 'black', color: 'white' },
            guide: {},
          });
        }
        break;
      case 'guide':
        if (Guide) {
          setSectionStyles({
            demo: { display: 'none' },
            code: { display: 'none' },
            guide: { display: 'flex' },
          });
          setButtonStyles({
            demo: {},
            code: {},
            guide: { backgroundColor: 'black', color: 'white' },
          });
        }
        break;
      default:
    }
  }

  const getSwitchViewButtonClass = (component) => {
    let classes = ['switch-view-button'];

    if (!component) {
      classes.push('disabled');
    }

    return classes.join(' ');
  }

  return (
    <div className='section' style={style}>

      <div className='section-header-container'>

        <div className='section-header'>

          <div className='sample-heading'>{heading}</div>

          <div className='switch-view-container'>

            <div className='switch-view'>
              <div style={buttonStyles.demo} className={getSwitchViewButtonClass(Demo)} onClick={() => { handleSwitchView('demo'); }}>
                <span>demo</span>
              </div>
              <div style={buttonStyles.code} className={getSwitchViewButtonClass(Code)} onClick={() => { handleSwitchView('code'); }}>
                <span>code</span>
              </div>
              <div style={buttonStyles.guide} className={getSwitchViewButtonClass(Guide)} onClick={() => { handleSwitchView('guide'); }}>
                <span>guide</span>
              </div>
            </div>

          </div>

        </div>


        {features &&
          <div className='section-header-features'>
            {features.length > 0 &&
              <div className='title'>
                <span>features:</span>
              </div>
            }
            {features.map((feature, i) => (
              <div key={i}>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        }

      </div>

      {Demo &&
        <div style={sectionStyles.demo}>
          <Demo parentContainerRef={parentContainerRef} />
        </div>
      }
      {Code &&
        <div style={sectionStyles.code}>
          <Code parentContainerRef={parentContainerRef} />
        </div>
      }
      {Guide &&
        <div style={sectionStyles.guide}>
          <Guide parentContainerRef={parentContainerRef} />
        </div>
      }

    </div >
  )
}