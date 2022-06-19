import React from 'react'
import { Button } from 'react-bootstrap';

const Number = ({id, selected, SelectedNumberState}) => 
{
    const SelectedNumberHandler = () => {
        SelectedNumberState(id);
    }

    
  return (
        <div className="grid grid-col-4">
            <div>
                <Button  onClick={SelectedNumberHandler} variant= {selected ? "primary":"secondary"}  > {id} </Button> {' '} 
            </div>
        </div>
    )
}

export default Number;
