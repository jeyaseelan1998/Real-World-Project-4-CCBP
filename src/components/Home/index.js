import React, { useEffect, useState } from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'
import CategoryItem from '../CategoryItem'

import './index.css'

const Home = () => {
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
    categories: []
  })

  const getCategories = async () => {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const response = await fetch(apiUrl)
    const data = await response.json()

    setApiResponse({
      isLoading: false,
      categories: data.categories
    })
  }

  useEffect(() => {
    getCategories()
  }, [])
  
  return !apiResponse.isLoading ? (
    <div className='home-container'>
        <Header />
        <div className='home-body-container'>
          <Sidebar categories={apiResponse.categories} />
          <ul className='categories-container'>
            {apiResponse.categories.map(each => {

              return (
                <CategoryItem key={each.idCategory} categoryDetails={each} />
              )
            })}
          </ul>
        </div>
    </div>
  ) : null
}

export default Home