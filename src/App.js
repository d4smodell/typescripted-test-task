import { useDispatch } from 'react-redux';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import AuthorizationPage from './components/Authorization/AuthorizationPage';
import Hospitals from './components/HospitalsPage/Hospitals';
import { replace } from './context/reducers/replaceReducer';
import './index.css'

function App() {
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