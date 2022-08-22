// @ts-nocheck
export const Card = ({image, title='', subtitle='', content, onClick}) => {
    return (<div onClick={onClick}>
        <img src={image} /> <br />
        {title}
        <span> {subtitle} </span>
        <span> {content} </span>
    </div>)
};

export default Card;