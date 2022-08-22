// @ts-nocheck
import classNames from "classnames";
import React from "react";
export const Input = ({value='', onChange = ()=>{},disabled = false, className='', ...rest}) => {
    let classname = classNames({'input_disabled': disabled}, className);

    return (
        <input type='text'  value={value} onChange={(e) => onChange(e.target.value)}  className={classname} disabled={disabled} {...rest} />
    )
};

export default Input
