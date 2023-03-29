import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './Layout/Layout';
import MealDetails from './components/MealDetails/MealDetails';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserFav from './components/UserFav/UserFav';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/:category' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/meal/:mealId' element={<MealDetails />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userFav' element={<UserFav />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
