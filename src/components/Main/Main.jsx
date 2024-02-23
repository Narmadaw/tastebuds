import Card from "./Card/Card"

const Main = ({categories}) =>{
    return(
        <>
        <section className="main">
            <section className="categories">
                {categories.map((element, index) =>{
                    return(
                        <Card key={index} name={element.strCategory} />
                    )
                })}
                
            </section>
        </section>
        
        </>
    )
    
}

export default Main