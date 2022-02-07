import React from "react";

export default function CoinInput(props) {
    return (
        <>
         <label htmlFor={props.id}>{props.description}</label>
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                name={props.name}
                min={props.min}
                step={props.max}

            />
        </>
    )

}