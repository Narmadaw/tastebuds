import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from '../../components/Main/Main';
import Header from './../../components/Header/Header';
import Hero from './../../components/Hero/Hero';
import './HomePage.scss';

const HomePage = () =>{
    const [category, setCategory] = useState([])

    const getMealCategory = async() =>{
        try{
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            console.log(response.data.categories)
            let categories = response.data.categories
            setCategory(categories)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() =>{
        getMealCategory()
    }, [])


    return (
        <section className='container'>
            <Header />
            <Hero />
            <Main categories = {category} />
        </section>
    )
}

export default HomePage