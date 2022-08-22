//@ts-nocheck
export const CheckBox = ({disabled = false, onChange = ()=>{}, checked = false, className='', ...rest}) => {
    const handleClick = (e) => {
        console.log("Here")
        console.log(e)
        return e.disabled;
    }
    return (
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled} className={className}  {...rest} />)
};

export default CheckBox;

