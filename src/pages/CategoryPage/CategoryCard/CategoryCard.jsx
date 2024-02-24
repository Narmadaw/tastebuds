import './CategoryCard.scss';
const CategoryCard = ({category}) =>{
    return (
        <div className="c-category-card">
            <img className='c-category-card__category-img' src={category.strMealThumb} alt='image'/>
            <h2 className="c-category-card__category-name">{category.strMeal}</h2>
        </div>
    )
}

export default CategoryCard