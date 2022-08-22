// @ts-nocheck
import React from "react";
export const MultiDropdown = ({options = [], value = [], onChange=()=>{}, disabled = false, pluralizeOptions = ()=>{}, className ='', ...rest}) => {
    const [show, setShow] = React.useState(false);
    let array = JSON.parse(JSON.stringify(value))
    // console.log("HERE", array, value)
    let title = <span>{pluralizeOptions(value)}</span>
    const handleClick = (item) => {
        let inArray = false;
        for (let elem of array) {
            if (item.key === elem.key) {
                inArray = true
            }
        }
        if (inArray == false) {
            array = [];
            array.push(item)
            onChange(array)
        }
        else {
            let index = -1
            for (let i = 0; i < array.length; i++){
                if (item.key === array[i].key) {
                    index = i
                }
            }
            array.splice(index, 1);
            onChange(array)
        }
    }

    const listOptions = options.map((item) => <li key={item.key} onClick={() => handleClick(item)}><span>{item.value}</span></li>)
    if (disabled) {
        return <></>
    }

    return (
        <div>
            <button disabled={disabled} onClick={() => {
                    setShow(!show)
            }}>{title}</button>

            {show && <ul className={className} {...rest}>
                {listOptions}
            </ul>}
        </div>
    )
};

export default MultiDropdown