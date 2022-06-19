import React from 'react'
import { Button } from 'react-bootstrap';

const Money = ({ id, value, SelectedMoneyState }) => {
    const SelectedMoneyHandler = () => {
        SelectedMoneyState(id);
    }

    
    return (
        <div>
            <Button onClick={SelectedMoneyHandler} variant="primary"  > ${value}  </Button> {' '}
        </div>
    );
}

export default Money;
