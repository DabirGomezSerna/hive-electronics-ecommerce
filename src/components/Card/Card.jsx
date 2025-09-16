import Button from '../Button/Button'

export function Card({name,price,description,imgUrl,onButtonClick}){
    return(
        <div>
            <img src={imgUrl}></img>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <Button label="Ver más" onClick={onButtonClick}></Button>
        </div>
    );
}