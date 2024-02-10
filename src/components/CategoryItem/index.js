import React, { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";

import Product from '../Product'

import './index.css'


const CategoryItem = ({ categoryDetails }) => {
    const { idCategory,
        strCategory } = categoryDetails

    const [apiResponse, setApiResponse] = useState({
        isLoading: true,
        products: []
    })

    const getUpdatedData = meals => meals?.map(each => ({
        id: each.idMeal,
        name: each.strMeal,
        price: "0.68",
        currency: "$",
        quantity: each.strMeasure1 || each.strMeasure4,
        imgUrl: each.strMealThumb

    }))

    const getProducts = async () => {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strCategory}`
        const response = await fetch(apiUrl)
        const data = await response.json()

        setApiResponse({
            isLoading: false,
            products: getUpdatedData(data.meals?.slice(0, 10))
        })
    }

    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderEmptyView = () => (
        <li>
            <h4>No meals to show...</h4>
        </li>
    )

    const renderProducts = () => {
        const { products = [] } = apiResponse

        console.log(products);
        return (
            <ul className='product-list-items'>
                {
                    products.length ?
                    products.map(each => <Product key={each.id} productDetails={each} />) :
                    renderEmptyView()
                }
            </ul>
        )
    }

    return !apiResponse.isLoading ? (
        <li id={idCategory} className='category-item-container'>
            <div className='category-heading-container'>
                <h1 className='category-heading'>{strCategory}</h1>
                <FaAngleRight className='right-arrow-icon' />
            </div>

            {renderProducts()}
        </li>
    ) : null
}

export default CategoryItem