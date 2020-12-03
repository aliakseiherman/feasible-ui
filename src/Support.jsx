import React from 'react';
import { Button } from 'feasible-ui';
import { useHistory } from 'react-router-dom';

export const Support = (props) => {

  const history = useHistory();

  const getForm = () => {
    return {
      __html: `<iframe src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=donation%20for%20feasible-ui&targets-hint=&default-sum=&button-text=14&hint=&successURL=&quickpay=shop&account=4100116130750193" width="100%" height="222" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
    `};
  }

  return (
    <div className='donation-page' style={{ maxWidth: '600px' }}>
      <div>
        <span>
          The currency used by the form is&nbsp;
            <a href='https://en.wikipedia.org/wiki/Ruble_sign' target='_blank' rel="noreferrer">russian ruble</a>.
          </span>
      </div>

      <div>
        <span>
          Convert the amount from USD to RUB —&nbsp;
            <a href='https://transferwise.com/us/currency-converter/usd-to-rub-rate' target='_blank' rel="noreferrer">transferwise.com</a>.
          </span>
      </div>

      <div>
        <div dangerouslySetInnerHTML={getForm()}></div>
      </div>

      <div>
        <span>
          Alternaively, you can make donation on the following page:&nbsp;
          <br />
          <a href='https://yoomoney.ru/to/4100116130750193' target='_blank' rel="noreferrer">https://yoomoney.ru/to/4100116130750193</a>
        </span>

      </div>

      <Button label={'go back'} onClick={() => { history.push('/demo') }} classes={['primary']} />
    </div>
  )
}