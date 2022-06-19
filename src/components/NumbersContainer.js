import React from 'react'
import Number from './Number';
import {Button, ButtonGroup } from 'react-bootstrap';

const NumbersContainer = ({ numbers, SelectedNumberState, ClearState, RandomState, Cash }) => {
    const ClearHandler = () => {
        ClearState();
    }

    const RandomHandler = () => {
        RandomState(5);
    }

    
    const CashHandler = () => {
        Cash();
    }
    /*                <button className="btn" type="button" id="CashButton" > CASH </button>
                <button className="btn" type="button" id="ClearButton" onClick={ClearHandler} > CLEAR </button>
                <button className="btn" type="button" id="ClearButton" onClick={RandomHandler} > RANDOM </button>
    */
    return (
        <>
            <div>Numbers Container</div>
            <div id="number-rows-area" className="grid grid-col-4" >
                <ButtonGroup aria-label="Number conteiner">
                    {numbers.map((number) => (<Number id={number.id} selected={number.selected} SelectedNumberState={SelectedNumberState} />))}
                </ButtonGroup>

                <div>  Options:  </div>

                <Button  onClick={CashHandler} variant= "secondary"  > CASH </Button>{' '} 
                <Button  onClick={ClearHandler} variant= "secondary"  > CLEAR </Button>{' '} 
                <Button  onClick={RandomHandler} variant= "secondary"  > RANDOM </Button>{' '} 
            </div>
        </>
    )
}

export default NumbersContainer;
