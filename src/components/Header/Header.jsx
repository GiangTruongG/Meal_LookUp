import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux';
import { fetchMealsBySearchInput } from '../../redux/slices/mealSlice';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser, setFavMeals } from '../../redux/slices/userSlice';

const Header = ({ sideBarRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSearchInput = (e) => {
      dispatch(fetchMealsBySearchInput(e.target.value));
      navigate('/');
  };

  const handleSignOut = () => {
      localStorage.setItem('user', JSON.stringify({}));
      dispatch(loginUser({}));
      dispatch(setFavMeals([]));

  };

  const handleSideBarToggle = () => {
      sideBarRef.current.classList.toggle('sideBar-open');
  };

  return (
    <div className='header'>
      <Link to='/'><h1>Meal Lookup</h1></Link>
      <div className='header__search'>
        <input type='text' onChange={handleSearchInput}></input>
        <button>Search</button>
      </div>
      <div className='header__user'>
        {user['username'] ? (
          <>
            <Link to='/userFav'><button>Hello {user['username']}!</button></Link>
            <Link to='/' onClick={handleSignOut}><button>Sign out</button></Link>
          </>
        ) : (
          <>
            <Link to='/login'><button>Log in</button></Link>
            <Link to='/signup'><button>Sign up</button></Link>
          </>
        )}
        
      </div>
      <button type='button' className='header__btn-sideBar' onClick={handleSideBarToggle}><FaBars /></button>
    </div>
  )
}

export default Header