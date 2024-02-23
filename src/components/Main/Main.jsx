import Card from "./Card/Card"
import './Main.scss'
const Main = ({categories}) =>{
    return(
        <>
        <section className="main">
            <section className="categories">
                {categories.map((element, index) =>{
                    return(
                        <Card className="categories__card-list" key={index} contents={element} />
                    )
                })}
                
            </section>
        </section>
        
        </>
    )
    
}

export default Main