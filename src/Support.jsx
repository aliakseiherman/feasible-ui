import React from 'react';
import { Button } from 'feasible-ui';
import { useHistory } from 'react-router-dom';

export const Support = (props) => {

  const history = useHistory();

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
        <span style={{ fontSize: '16px' }}>
          Donation page —&nbsp;
          <br />
          <a href='https://yoomoney.ru/to/4100116130750193' target='_blank' rel="noreferrer">https://yoomoney.ru/to/4100116130750193</a>
        </span>

      </div>

      <Button label={'go back'} onClick={() => { history.push('/demo') }} classes={['primary']} />
    </div>
  )
}