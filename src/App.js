import { BrowserRouter, Route } from "react-router-dom";
import AuthorizationPage from "./components/Authorization/AuthorizationPage";
import Hospitals from "./components/HospitalsPage/Hospitals";
import "./index.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Route path="/hospitals" render={() => <Hospitals />} />
      <Route exact path="/" render={() => <AuthorizationPage />} />
    </BrowserRouter>
  );
}

export default App;

// Test_ultra_task / T54321oikb