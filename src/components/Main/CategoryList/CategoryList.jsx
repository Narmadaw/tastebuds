import Card from './../Card/Card'
import './CategoryList.scss'
const CategoryList = ({categories}) =>{
    return(
        <>
        <div className="category-list">
            {categories && categories.map((element) =>{
                return(
                    <Card className="categories__card-list" contents={element} />
                )
            })}
        </div>
        </>
    )
}

export default CategoryList