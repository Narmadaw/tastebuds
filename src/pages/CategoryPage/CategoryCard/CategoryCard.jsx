import { Link } from 'react-router-dom';

import './CategoryCard.scss';
const CategoryCard = ({category}) =>{
    return (
        <Link to={`/recipe/${category.strMeal}`}>
            <div className="c-category-card">
                <img className='c-category-card__category-img' src={category.strMealThumb} alt='image'/>
                <h2 className="c-category-card__category-name">{category.strMeal}</h2>
            </div>
        </Link>
    )
}

export default CategoryCard