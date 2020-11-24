import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import AuthorizationPage from './components/Authorization/AuthorizationPage';
import Hospitals from './components/HospitalsPage/Hospitals';
import './index.css'

function App() {
  const isAuth = localStorage.access
  return (
    <BrowserRouter className="App">
      {!isAuth ? <Redirect to='/'/> : <Redirect to="/hospitals"/>}
      {isAuth ? <Route path="/hospitals" render={() => <Hospitals />} /> : <Route path='/' render={() => <AuthorizationPage />}/>}
    </BrowserRouter>
  );
}

export default App;

// Test_ultra_task / T54321oikb