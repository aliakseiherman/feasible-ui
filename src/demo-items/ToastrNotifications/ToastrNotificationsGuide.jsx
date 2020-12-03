import React from 'react';
import { PrismWrapper } from '../../components/prism-wrapper/PrismWrapper';

export const ToastrNotificationsGuide = (props) => {

  return (
    <div className='guide'>
      <div className='paragraph'><span>All methods of `toastr` object accept timeout in milliseconds as the second parameter (nullable):</span></div>

      <div className='code-block'>
        <PrismWrapper
          code={`toastr.info('your message...', 10000);`}
        />
      </div>

      <div className='paragraph'><span>Timeout of 0 will force a toastr notification to stay on the screen until we click on it</span></div>

      <div className='code-block'>
        <PrismWrapper
          code={`toastr.info('your message...', 0);`}
        />
      </div>

      <div className='paragraph'><span>When undefined — default timeout passed to `Toastr` component is used; e.g. 10 seconds:</span></div>

      <div className='code-block'>
        <PrismWrapper
          code={`<Toastr timeout={10000} />`}
        />
      </div>

      <div className='paragraph'><span>Custom templates feature implies we create a component (template), then pass it along with data and methods bound to one context called `descriptor` — the first argument of `.custom()` method:</span></div>

      <div className='code-block'>
        <PrismWrapper
          code={`// the first argument is the decriptor
toastr.custom({
  template: MessageToast,
  func: () => { } // this function will be available in MessageToast component off \`descriptor\` object
}, 0);`}
        />
      </div>

      <div className='paragraph'><span>`descriptor` is an object that is fetched in the root toast component. The custom template component is resolved / rendered based on `descriptor.template` property.</span></div>

      <div className='paragraph'><span>Excerpt from the source code of the root component — `Toastr.jsx`:</span></div>

      <div className='code-block'>
        <PrismWrapper
          code={`if (toast.descriptor
  && toast.descriptor.template) {
    
  const Template = toast.descriptor.template;

  return (
    <Template
      descriptor={toast.descriptor} // descriptor is further injected into our custom template / component
      close={() => { removeToast(toast); }}
      key={i}
    />
  )
} else {`}
        />
      </div>

      <div className='paragraph'><span>The `descriptor` itself combines template component, data & methods that we want to use in our custom template.</span></div>

      <div className='paragraph'><span>Here's how you build a custom toast:</span></div>

      <div className='code-block'>
        <PrismWrapper
          code={`export const MessageToast = (props) => {

  const {
    descriptor,
    close
  } = props;

  const {
    func // function you have passed in the above code snippet
  } = descriptor;

  ...your custom functionality

  return (
    <div className='toast custom'>

      ...your custom markup

    </div>
  )
}`}
        />
      </div>

    </div>
  )
}