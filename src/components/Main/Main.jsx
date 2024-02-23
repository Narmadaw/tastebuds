
import CategoryList from "./CategoryList/CategoryList"
import './Main.scss'
const Main = ({categories}) =>{
    return(
        <>
        <section className="main">
            <section className="categories">
                <h2 className="categories__title">Popular Categories</h2>
                <CategoryList categories = {categories} />
            </section>
            <section className="banner">

            </section>
        </section>
        
        </>
    )
    
}

export default Main