/*const convert = () => {
        let crowns;
        let shillings;
        let pennies;
        switch (formData.currency) {
            case "crown":
                shillings = (parseFloat(formData.crown) * 20).toFixed(2);
                pennies = (parseFloat(formData.crown) * 240).toFixed(2);
                setResult(`${shillings} shillings or ${pennies} pennies`)
                break;
            case "shilling":
                crowns = (parseFloat(formData.shilling) / 20).toFixed(2);
                pennies = (parseFloat(formData.shilling) * 12).toFixed(2);
                setResult(`${crowns} golden crowns or ${pennies} pennies`)
                break;
            case "penny":
                crowns = (parseFloat(formData.penny) / 240).toFixed(2);
                shillings = (parseFloat(formData.penny) / 12).toFixed(2);
                setResult(`${crowns} golden crowns or ${shillings} shilings`)
                break;
            default: alert("Unknown value");
        }
    }*/

    /*<select
        value={formData.currency}
        onChange={handleChange}
        name="currency"
    >
        <option value="">--Please choose an option--</option>
        <option value="crown">Golden crowns</option>
        <option value="shilling">Silver shillings</option>
        <option value="penny">Copper pennies</option>
   </select>
   
   
    <p>Pensy na osobę: {result || "Result..."} </p>
   */