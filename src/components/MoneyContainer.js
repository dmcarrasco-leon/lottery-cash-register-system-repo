import React from 'react';
import Money from './Money';
import {  ButtonGroup } from 'react-bootstrap';

const MoneyContainer = ({ moneyArray, SelectedMoneyState }) => {
  return (
    <>
      <div>Money Container</div>

      <div id="money-rows-area" className="grid grid-col-4" >
        <div>
          <ButtonGroup aria-label="Money button group">
            {moneyArray.map((money) => (<Money id={money.id} value={money.value} SelectedMoneyState={SelectedMoneyState} />))}
          </ButtonGroup>
        </div>

      </div>
    </>
  );
}


export default MoneyContainer;
