function convert() {
    let storedNr = document.getElementById("toCount").value;
    let myNumber = parseFloat(storedNr);
    let bilon = document.getElementById("bilonType").value;
    let result;
    let crowns;
    let shillings;
    let pennies;
    if (bilon === "crown") {
        shillings = (myNumber * 20).toFixed(2);
        pennies = (myNumber * 240).toFixed(2);
        result = `${shillings} shillings or ${pennies} pennies`;
    } else if (bilon === "shilling") {
        crowns = (myNumber / 20).toFixed(2);
        pennies = (myNumber * 12).toFixed(2);
        result = `${crowns} golden crowns or ${pennies} pennies`;
    } else if (bilon === "penny") {
        crowns = (myNumber / 240).toFixed(2);
        shillings = (myNumber / 12).toFixed(2);
        result = `${crowns} golden crowns or ${shillings} shilings`;
    }
    updateDisplay(result);
}

function updateDisplay(result) {
    document.getElementById("result").innerHTML = result;
}

