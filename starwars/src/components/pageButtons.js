import React from 'react';
import { Button } from 'reactstrap';



const PageButtons = (props) => {

  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
      <div>
      <div>
    {!props.data.previous ? null : <Button style={{color:"#00005c", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline onClick={props.handlePrevious}>Previous</Button>}
    {!props.data.next ? null : <Button style={{ color:"#00005c", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline onClick={props.handleNext}>Next</Button>}
    </div>
    </div>
  );
}

export default PageButtons;
