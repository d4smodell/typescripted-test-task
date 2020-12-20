import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthorizationPage from "./components/Authorization/AuthorizationPage";
import Hospitals from "./components/HospitalsPage/Hospitals";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <AuthorizationPage />} />
        <Route path="/hospitals" render={() => <Hospitals />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// Test_ultra_task / T54321oikb
