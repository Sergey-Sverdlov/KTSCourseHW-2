// @ts-nocheck
export const Loader = ({size = 'm', className='', loading=true}) => {
    if (loading === false) {
        return (<></>);
    }
    className += ` loader_size-${size}`;

    return (
        <div className={className}>сам loader</div>
    )
}
