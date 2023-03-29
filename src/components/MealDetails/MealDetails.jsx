import React from 'react';
import './MealDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMealById } from '../../redux/slices/mealSlice';

const MealDetails = () => {
    const { mealId } = useParams();
    const dispatch = useDispatch();
    const { meal } = useSelector(state => state.meals);

    useEffect(() => {
        dispatch(fetchMealById(mealId));
    }, []);

    if (!meal.meals) {
        return (
          <div className='loading'>
            <h2>Loading...</h2>
          </div>
        )
    }

    console.log(meal.meals[0]);
    console.log(Object.keys(meal.meals[0]));

  return (
    <div className='mealDetails'>
        <div className='mealDetails__main'>
            <div className='mealDetails__img'>
                <img src={meal.meals[0].strMealThumb}></img>
            </div>
            <div className='mealDetails_ingredients'>
                <h3 className='mealDetails__heading'>Ingredients and Measurement</h3>
                {Object.keys(meal.meals[0]).map(key => {
                    if (key.includes('strIngredient') && meal.meals[0][key] !== '') {
                        let regex = /\d+/g;
                        let lastChar = key.match(regex);
                        let strIng = 'strIngredient' + lastChar;
                        let strMeasure = 'strMeasure' + lastChar;
                        return (
                            <div><span>{meal.meals[0][strIng]}</span> - <span>{meal.meals[0][strMeasure]}</span></div>
                        )
                    }
                })}
            </div>
        </div>
        <div className='mealDetails__instructions'>
                <h3 className='mealDetails__heading'>Instructions</h3>
                <p>{meal.meals[0]['strInstructions']}</p>
        </div>
    </div>
  )
}

export default MealDetails