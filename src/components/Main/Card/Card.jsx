import "./Card.scss";
const Card = ({contents}) =>{
    const clickHandler = (event) =>{
        console.log(contents.strCategory)
    }
    return(
        <>
        <div className="card" onClick={clickHandler}>
            <div className="card__image-container">
                <img className="card__image" src={contents.strCategoryThumb} alt="image"/>
            </div>
            <div className="card__text-container">
                <h2 className="card__text">{contents.strCategory}</h2>
            </div>
        </div>
        </>
    )
}

export default Card;