import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SideBar = ({ sideBarRef }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
      
      let categories = data.categories;

      setCategories(categories);
    }

    fetchCategories();
  }, []);

  const handleCategoryClick = () => {
      handleSideBarToggle();
  };

  const handleSideBarToggle = () => {
      sideBarRef.current.classList.toggle('sideBar-open');
  };

  return (
    <nav className='side-bar' ref={sideBarRef}>
      <ul>
        {categories.map(category => (
            <li className='side-bar__link' key={category.idCategory} >
              <NavLink to={`/${category.strCategory}`} onClick={() => handleCategoryClick()}>
                {category.strCategory}
              </NavLink>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideBar