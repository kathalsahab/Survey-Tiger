import logo from "./survey-tiger.png";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
import { Button } from "reactstrap";
import CreateSurvey from "./components/CreateSurvey";

function App() {
   return (
      <Router>
         <div className="App">
            <header className="App-header">
               <Link to="/">
                  <img src={logo} className="App-logo" alt="logo" />
               </Link>
            </header>
            <Switch>
               <Route path="/create">
                  <CreateSurvey />
               </Route>
               <Route path="/take">Take Survey</Route>
               <Route path="/">
                  <Link to="/create">
                     <Button className="survey-main-btn">Create Survey</Button>
                  </Link>
                  <Link to="/take">
                     <Button className="survey-main-btn">Take Survey</Button>
                  </Link>
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
