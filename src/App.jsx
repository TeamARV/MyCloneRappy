import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page1 from "./pages/Page1";



function App() {
  return (
    <div className="App">

<Router>
        <Switch>
          <Route path='/' >
            <Page1/>
            </Route>   
        </Switch>
      </Router>

    </div>
  );
}

export default App;
