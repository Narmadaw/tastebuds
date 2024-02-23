
import CategoryList from "./CategoryList/CategoryList"
import './Main.scss'
const Main = ({categories}) =>{
    return(
        <>
        <section className="main">
            <section className="categories">
                <h2>Popular Categories</h2>
                <CategoryList categories = {categories} />
            </section>
        </section>
        
        </>
    )
    
}

export default Main