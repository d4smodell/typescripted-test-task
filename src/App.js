import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import AuthorizationPage from './components/Authorization/AuthorizationPage';
import Hospitals from './components/HospitalsPage/Hospitals';
import { changeHospitalPlacesThunk } from './context/reducers/hospitalPlacesReducer';
import './index.css'

function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(changeHospitalPlacesThunk(2, 4, 13, 18, 19, 17, 6, 8, 5))
  // })
  const isAuth = localStorage.access && localStorage.username && localStorage.refresh
  return (
    <BrowserRouter className="App">
      {!isAuth ? <Redirect to='/'/> : <Redirect to="/hospitals"/>}
      {isAuth ? <Route path="/hospitals" render={() => <Hospitals />} /> : <Route path='/' render={() => <AuthorizationPage />}/>}
    </BrowserRouter>
  );
}

export default App;

// Test_ultra_task / T54321oikb