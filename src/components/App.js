import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './Header';
import MoneyContainer from './MoneyContainer';
import NumbersContainer from './NumbersContainer';
import NumbersSelectedContainer from './NumbersSelectedContainer';

import { Container, Row, Col } from 'react-bootstrap';

const App = () => {

  const [numbers, setNumbers] = useState
    ([
      { id: 1, selected: false },
      { id: 2, selected: false },
      { id: 3, selected: false },
      { id: 4, selected: false },
      { id: 5, selected: false },
      { id: 6, selected: false },
      { id: 7, selected: false },
      { id: 8, selected: false },
      { id: 9, selected: false },
      { id: 10, selected: false },
      { id: 11, selected: false },
      { id: 12, selected: false },
      { id: 13, selected: false },
      { id: 14, selected: false },
      { id: 15, selected: false },
      { id: 16, selected: false },
      { id: 17, selected: false },
      { id: 18, selected: false },
      { id: 19, selected: false },
      { id: 20, selected: false }
    ]);

  //const [moneyArray, setMoneyArray] = useState
  const moneyArray =
    ([
      { id: 1, value: 1 },
      { id: 2, value: 5 },
      { id: 3, value: 10 },
      { id: 4, value: 20 }
    ]);

  const [totalMoney, setTotalMoney] = useState(0);

  const [selectedNumbersForTicket, setSelectedNumbersForTicket] = useState([]);

  const Cash = () => {
    let selectedNumbers = numbers.filter(number => number.selected === true);

    let listNumbers = "";
    for (let i = 0; i < 5; i++) {
      listNumbers = `${listNumbers}, ${selectedNumbers[i].id}`;
    }

    alert(`The customer numbers are: ${listNumbers} and the total of money is: ${totalMoney}`);
  }

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const RandomState = (numberOfNumbers) => {
    let randoms = [];
    let repited = false;

    // generate different number 
    let countNumberOfNumbers = 0;
    while (countNumberOfNumbers < numberOfNumbers) {
      let random = randomNumberInRange(0, numbers.length - 1);
      for (let i = 0; i < randoms.length; i++) {
        if (random === randoms[i]) {
          repited = true;
          break;
        } else {
          repited = false;
        }
      }
      if (!repited) {
        randoms.push(random);
        countNumberOfNumbers = countNumberOfNumbers + 1;
      }
    }

    const updateNumbersArr = [...numbers];
    // unselected numbers
    for (let n = 0; n < updateNumbersArr.length; n++) {
      let temp_element = { ...updateNumbersArr[n] };
      temp_element.selected = false;
      updateNumbersArr[n] = temp_element;
    }

    // unselected numbers
    for (let j = 0; j < randoms.length; j++) {
      let k = randoms[j];
      let temp_element = { ...updateNumbersArr[k] };
      temp_element.selected = true;
      updateNumbersArr[k] = temp_element;
    }
    setNumbers(updateNumbersArr);

    // render again selected numbers for tickets 
    //   SelectedNumbersForTicketState();
    let selectedNumbers = updateNumbersArr.filter(number => number.selected === true);
    setSelectedNumbersForTicket(selectedNumbers);
  }

  const ClearState = () => {

    const updateNumbersArr = [...numbers];
    // unselected numbers
    for (let i = 0; i < updateNumbersArr.length; i++) {
      let temp_element = { ...updateNumbersArr[i] };
      temp_element.selected = false;
      updateNumbersArr[i] = temp_element;
    }
    setNumbers(updateNumbersArr);

    // render again selected numbers for tickets 
    const updateNumbersArr2 = [...[]];
    setSelectedNumbersForTicket(updateNumbersArr2);

    // reestart Total money
    let newTotalMoney = 0;
    setTotalMoney(newTotalMoney);

  }

  const SelectedMoneyState = (id) => {

    let newTotalMoney = 0;
    let selectedMoney = moneyArray.find(money => money.id === id);
    if (CountSelectedNumbers() === 5) { // 

      newTotalMoney = totalMoney + selectedMoney.value;
      setTotalMoney(newTotalMoney);
    } else {
      newTotalMoney = 0;
      setTotalMoney(newTotalMoney);
      alert("You must choose 5 number first ");
    }
  }

  const SelectedNumbersForTicketState = () => {
    let selectedNumbers = numbers.filter(number => number.selected === true);
    setSelectedNumbersForTicket(selectedNumbers);
  }


  const CountSelectedNumbers = () => {
    //let selectedNumbers = numbers.filter(function(number){ return (number.selected ?  true : false);});
    let selectedNumbers = numbers.filter(number => number.selected === true);

    return selectedNumbers.length;
    //return numbers.filter(number => number.selected === true).length;

  }

  const SelectedNumberState = (id) => {

    const updateNumbersArr = [...numbers];

    let selectedNumber = updateNumbersArr.find(number => number.id === id);
    if (selectedNumber.selected) {
      selectedNumber.selected = !selectedNumber.selected;
    } else
      if (CountSelectedNumbers() < 5) { // only 6 numbers 
        selectedNumber.selected = !selectedNumber.selected;
      } else {
        alert("You must choose 5 number maximun");
      }

    setNumbers(updateNumbersArr);

    SelectedNumbersForTicketState();
  }

  
  return (
    <div>
      <Header />
      <body>

        <Container>

          <Row>
            <Col>
              <NumbersContainer numbers={numbers} SelectedNumberState={SelectedNumberState} ClearState={ClearState} RandomState={RandomState} Cash={Cash} />
            </Col>
          </Row>
         
          <Row>
            <Col>
              <MoneyContainer moneyArray={moneyArray} SelectedMoneyState={SelectedMoneyState} />

            </Col>
          </Row>

          <Row>
            <Col>
            <NumbersSelectedContainer totalMoney={totalMoney} selectedNumbersForTicket={selectedNumbersForTicket} />

            </Col>
          </Row>

        </Container>
      </body>

    </div>
  );
}

export default App;
