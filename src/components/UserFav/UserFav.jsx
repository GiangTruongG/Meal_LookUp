import React from 'react';
import './UserFav.css';
import Meal from '../Home/Meal/Meal';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavMeals } from '../../redux/slices/userSlice';

const UserFav = () => {
  const { user, userFavoriteMeals } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const isFavMealsPage = true;

  console.log(user['favoriteMeals']);

  useEffect(() => {
    const fetchData = async () => {
        await dispatch(fetchFavMeals(user['favoriteMeals']))
    };

    fetchData();
  }, []);

  console.log(userFavoriteMeals);

  return (
    <div className='userFav'>
      <h1>Your Favorite Meals!</h1>
      <div className='row'>
        {userFavoriteMeals.length > 0 ? (
          userFavoriteMeals.map(meal => (
            <div className='col-md-3'>
              <Meal meal={meal} key={meal.idMeal} isFavMealsPage={isFavMealsPage}></Meal>
            </div>
          ))
        ) : (
          <p className='userFav__noMeals'>You have no favorite meals yet!</p>
        )}
      </div>
    </div>
  )
}

export default UserFav