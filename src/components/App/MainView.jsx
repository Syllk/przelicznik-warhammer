import React, { useState } from "react";
import CoinInput from "./CoinInput";
import inputData from "./data";
import ResultDisplay from "./ResultDisplay";



function Recounter() {

    const [result, setResult] = useState(0);
    const [formData, setFormData] = useState(
        {
            teamNum: 1,
            crown: 0,
            shilling: 0,
            penny: 0
        });

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: parseInt(event.target.value || "0")
            }

        }

        )
    }
    const penniesForATeamMember = () => {
        let pennies = parseFloat(formData.crown * 240)
            + parseFloat(formData.shilling * 12)
            + parseFloat(formData.penny)
        setResult(pennies / formData.teamNum)
    }




    const reset = () => {
        setFormData({
            teamNum: 1,
            crown: 0,
            shilling: 0,
            penny: 0
        })
        setResult(0)
    }

    const inputs = inputData.map(item => {
        return (
            <CoinInput
                key={item.id}
                {...item}
                onChange={handleChange}
                value={formData[item.value]}
                

            />
        
        )
    })
    
   
    return (
        <React.Fragment>
            {inputs}
            <br />
            <button className="iwul--button" onClick={penniesForATeamMember} >Przelicz</button>
            <br />
            <button className="iwul--button" onClick={reset} >Reset</button>
            <br />
            <ResultDisplay
                result={result}
            />


        </React.Fragment>
    );
};

export default Recounter;