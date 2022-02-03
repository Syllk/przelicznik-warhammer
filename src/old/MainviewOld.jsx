import React, { useState } from "react";


function Recounter() {

    const [currency, setCurrency] = useState();
    const [bilon, setBilon] = useState("");
    const [result, setResult] = useState();
    const [formData, setFormData] = useState(
        { teamNum: 0 });


    const convert = () => {
        let crowns;
        let shillings;
        let pennies;
        switch (currency) {
            case "crown":
                shillings = (parseFloat(bilon) * 20).toFixed(2);
                pennies = (parseFloat(bilon) * 240).toFixed(2);
                setResult(`${shillings} shillings or ${pennies} pennies`)
                break;
            case "shilling":
                crowns = (parseFloat(bilon) / 20).toFixed(2);
                pennies = (parseFloat(bilon) * 12).toFixed(2);
                setResult(`${crowns} golden crowns or ${pennies} pennies`)
                break;
            case "penny":
                crowns = (parseFloat(bilon) / 240).toFixed(2);
                shillings = (parseFloat(bilon) / 12).toFixed(2);
                setResult(`${crowns} golden crowns or ${shillings} shilings`)
                break;
            default: alert("Unknown value");
        }

    }
  
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }

        }

        )
    }
    return (
        <React.Fragment>
            <input 
            type="number" 
            value={bilon} 
            onChange={(event) => setBilon(event.target.value)} 
            placeholder="Enter number here..." 
            />
            <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="crown">Golden crowns</option>
                <option value="shilling">Silver shillings</option>
                <option value="penny">Copper pennies</option>
            </select>
            <br />
            <button onClick={convert} >Convert</button>
            <p>{result || 'Result...'} </p>
            <input
                type="number"
                placeholder="Ilość członków drużyny"
                onChange={handleChange}
                name="teamNum"
                value={formData.teamNum}
            />
            <p>{console.log(formData.teamNum)} </p>
        </React.Fragment>
    );
};

export default Recounter;