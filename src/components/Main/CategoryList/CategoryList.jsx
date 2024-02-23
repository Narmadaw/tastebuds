import Card from './../Card/Card'
import './CategoryList.scss'
const CategoryList = ({categories}) =>{
    return(
        <>
        <div className="category-list">
            {categories.map((element, index) =>{
                return(
                    <Card className="categories__card-list" key={index} contents={element} />
                )
            })}
        </div>
        </>
    )
}

export default CategoryList