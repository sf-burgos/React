import React, { Fragment, useState} from 'react'

const ConditionTernaryOperator = () => {
    const [cont, setCont] = useState(0);
     return (
       <Fragment>
         <h3>the counter is uping: {cont}</h3>
         <h4>{
             //condition ? positive : negative 
             //https://bluuweb.github.io/react-udemy/01-proyecto/
             cont > 2 ? "high than 2":"less than 2"
             }</h4>
         <button onClick={() => setCont(cont + 1)}>up the counter!</button>
       </Fragment>
     );
   };

export default ConditionTernaryOperator