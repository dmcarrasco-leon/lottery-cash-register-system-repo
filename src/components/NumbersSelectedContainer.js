import React from 'react'

const NumbersSelectedContainer = ({ totalMoney, selectedNumbersForTicket }) => {

  return (
    <>
      <div>
        <div> Numbers Selected: </div>
        {selectedNumbersForTicket.map(number => <div>Mark : {number.id}</div>)}
        <br></br>
        <br></br>
        <div> Total : ${parseFloat(totalMoney).toFixed(2)}</div>
      </div>
    </>
  )
}


export default NumbersSelectedContainer;


/* 
const NumbersSelectedSection = (selectedNumbersForTicket, SelectedNumbersForTicketState) => {
  
 return (
    <>
      <div id="number-ticket-rows-area" className="grid grid-col-4" >

        {selectedNumbersForTicket.map((number) => (<NumberSelected id={number.id} SelectedNumbersForTicketState={SelectedNumbersForTicketState} />))}

        <br></br>
      </div>
    </>
  )
  */


