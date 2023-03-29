import React from 'react';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { fetchMeals } from '../../redux/slices/mealSlice';
import Meal from './Meal/Meal';
import { useParams } from 'react-router-dom';
import { fetchMealsByCategory } from '../../redux/slices/mealSlice';
import { loginUser, mealAdded } from '../../redux/slices/userSlice';

const Home = () => {
  const { meals } = useSelector(state => state.meals);
  const { mealAddedAsFavorite } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { category } = useParams();
  const user = JSON.parse(localStorage.getItem('user')); 

  useEffect(() => {
    if (category) {
      dispatch(fetchMealsByCategory(category));
    } else {
      dispatch(fetchMeals());
    }

    if (user['username']) {
      dispatch(loginUser(user));
    }
    
  }, [category]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(mealAdded(false))
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!meals.meals) {
    return (
      <div className='loading'>
        <h2>Loading...</h2>
      </div>
    )
  };

  return (
    <div className='home'>
      <div className={mealAddedAsFavorite ? 'mealAdded show' : 'mealAdded'}>
          Your Favorite Meal has been successfully added!
        </div>
      <div className='row'>
        {meals.meals && meals.meals.map(meal => (
          <div className='col-md-3'>
            <Meal meal={meal} key={meal.idMeal} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home