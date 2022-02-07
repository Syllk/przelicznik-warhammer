import React from "react"
import Utils from "./Utils"


export default function ResultDisplay(props) {
    const { crowns, shillings, pennies, deamons } = Utils.moneyDivider(props.result)
    return (

        <ul className="money--list">
            <li>Złote korony: {crowns || "0"}</li>
            <li>Srebrne szylingi: {shillings || "0"}</li>
            <li>Miedziane pensy: {pennies || "0"}</li>
            <li>Ofiara dla Demonów: {deamons || "0 - smutne demonki"}</li>
        </ul>

    )



}

