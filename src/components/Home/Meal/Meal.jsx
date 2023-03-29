import React from 'react';
import './Meal.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, mealAdded } from '../../../redux/slices/userSlice';

const Meal = ({ meal, isFavMealsPage }) => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleAddFavorite = async () => {
      let updatedUser = {};
      if (!user['favoriteMeals']) {
        updatedUser = {
          ...user,
          favoriteMeals: [meal.idMeal]
        }
      } else {
        updatedUser = {
          ...user,
          favoriteMeals: [...user['favoriteMeals'], meal.idMeal]
        }
      }
      
      const response = await axios.put(`http://localhost:3000/users/${user['id']}`, updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      dispatch(loginUser(updatedUser));
      dispatch(mealAdded(true));
  };

  return (
    <div className='meal'>
      <div className='meal__img'>
        <img src={meal.strMealThumb} alt='meal-img' style={{"width": "100%"}}></img>
      </div>
      <div className='meal__info'>
        <h3>{meal.strMeal}</h3>
        <p>{meal.strCategory} - {meal.strArea}</p>
        <div className='d-flex justify-content-between'>
          <Link to={`/meal/${meal.idMeal}`}><button>View Details</button></Link>
          {user['username'] && !isFavMealsPage ? <button onClick={handleAddFavorite}>Add Favorite</button>: ''}
        </div>
      </div>
    </div>
  )
}

export default Meal