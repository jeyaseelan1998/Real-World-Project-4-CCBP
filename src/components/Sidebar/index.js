import React, { useState } from 'react'

// import categories from '../../data/categories';
import './index.css'

const Sidebar = ({ categories }) => {
    const [activeId, setActiveId] = useState(categories[0].idCategory)

    const renderSidebarItems = () => (
        <ul className='sidebar-list-container'>
            {
                categories.map(each => {
                    const { idCategory, strCategory } = each

                    const updateActiveId = () => setActiveId(idCategory)

                    return (
                        <li key={idCategory}
                            className={`sidebar-item ${activeId === idCategory ? "active-sidebar-item" : ""}`}
                            onClick={updateActiveId}
                        >
                            <a href={`#${idCategory}`} className='sidebar-item-link'>
                                <p className='sidebar-item-text'>{strCategory}</p>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )

    const renderTopbarItems = () => (
        <ul className='topbar-items-container'>
            {
                categories.map(each => {
                    const { idCategory, strCategory, strCategoryThumb } = each

                    const updateActiveId = () => setActiveId(idCategory)

                    return (
                        <li key={idCategory} className='topbar-item-container'>
                            <a href={`#${idCategory}`} onClick={updateActiveId} className='topbar-item-link'
                            >
                                <button type='button'
                                    className={`topbar-item-icon-btn ${activeId === idCategory ? 'active-tab-btn' : ""}`}
                                >
                                    <img className='category-thumbnail' alt={strCategory} src={strCategoryThumb} />
                                </button>
                                <p className={`${activeId === idCategory ? "active-tabbar-text" : ""}`}>
                                    {strCategory.slice(0, 8)}{strCategory.length < 9 ? "" : "..."}
                                </p>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )

    return (
        <div>
            {renderSidebarItems()}

            {renderTopbarItems()}
        </div>
    )
}

export default Sidebar