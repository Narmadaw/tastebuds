import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryPage.scss';
import CategoryCard from './CategoryCard/CategoryCard';

const CategoryPage = () =>{
    const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
    const {category} = useParams();
    const [categoryList, setCategoryList] = useState([])

    useEffect(() =>{
        const getCategoryByName = async () =>{
            console.log(category)
            console.log(`${URL}${category}`)
            try{
                const response = await axios.get(`${URL}${category}`)
                console.log(response)
                const list = response.data.meals
                setCategoryList(list)
            }catch(err){
                console.log(err)
            }
        }
        getCategoryByName();
    }, [category])

    return(
        <>
        <section>
        <h1>{category}</h1>
            <hr/>
        </section>
        <section className='category-section'>
            {categoryList.map((element, index) =>{
                return(
                    <CategoryCard category = {element} key={index} />
                )
            })}
        </section>
        </>
    )
}

export default CategoryPage;