import React, { useState } from 'react';
import './Budget.css';

const Budget = () =>{

    const [budget, setBudget] = useState('');

    const handleBudgetChange = (e) => {
      setBudget(e.target.value);
    };
  
    const handleNext = () => {
      // Handle the next step logic here
      alert(`Budget: ${budget}`);
    };
  
    const handleBack = () => {
      // Handle the back step logic here
      alert('Going back to the previous step');
    };

    return(
      

<div className="form-step" >
          <h3   style={{
                        fontSize: "24px",
                        fontWeight: "500",
                        fontFamily: "Poppins",
                        lineHeight: "36px",
                        color: "#7F7F7F",
                      }}>Budget</h3>

<div style={{alignSelf:'start'}}>

<label
                      className="input_label"
                        style={{
                          fontFamily: "Manrope",
                          marginTop:'5px',
                          fontSize: "18px",
                          fontWeight: "500",
                          lineHeight: "24.59px",
                          textAlign: "left",
                          color: "rgba(45, 45, 45, 1)",
                        }}
                      >
                        {" "}
                        Estimate Budget*{" "}
                      </label>    

                      
</div>        
          <input
          style={{width:'418px', marginTop:'6px'}}
            type="text"
            placeholder="Enter Your Budget"
            value={budget}
            onChange={handleBudgetChange}
          />




        </div>

    )
}

export default Budget;