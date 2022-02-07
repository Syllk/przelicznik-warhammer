import React, { useState } from "react";
import Utils from "./Utils";


function Recounter() {

    const [result, setResult] = useState();
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


    const { crowns, shillings, pennies, deamons } = Utils.moneyDivider(result)
    
    const reset = () => {
        setFormData({
            teamNum: 1,
            crown: 0,
            shilling: 0,
            penny: 0
        })
    }
    return (
        <React.Fragment>
            <label htmlFor="cr">Ilość złotych koron</label>
            <input
                id="cr"
                type="number"
                placeholder="Enter number here..."
                onChange={handleChange}
                name="crown"
                value={formData.crown}
                min={0}
                step={1}

            />
            <label htmlFor="sh">Ilość srebrnych szylingów</label>
            <input
                id="sh"
                type="number"
                placeholder="Enter number here..."
                onChange={handleChange}
                name="shilling"
                value={formData.shilling}
                min={0}
                step={1}

            />
            <label htmlFor="pe">Ilość miedzianych pensów</label>
            <input
                id="pe"
                type="number"
                placeholder="Enter number here..."
                onChange={handleChange}
                name="penny"
                value={formData.penny}
                min={0}
                step={1}

            />

            <label htmlFor="teamNum">Ilość członków drużyny</label>
            <input
                id="teamNum"
                type="number"
                placeholder="Ilość członków drużyny"
                onChange={handleChange}
                name="teamNum"
                value={formData.teamNum}
                min={1}
                step={1}
            />
            <br />
            <button className="iwul--button" onClick={penniesForATeamMember} >Przelicz</button>
            <br />
            <button className="iwul--button" onClick={reset} >Reset</button>
            <br />
            <ul className="money--list">
                <li>Złote korony: {crowns || "0"}</li>
                <li>Srebrne szylingi: {shillings || "0"}</li>
                <li>Miedziane pensy: {pennies || "0"}</li>
                <li>Ofiara dla Demonów: {deamons || "0 - smutne demonki"}</li>
            </ul>

        </React.Fragment>
    );
};

export default Recounter;