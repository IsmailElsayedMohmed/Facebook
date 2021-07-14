import {
  BrowserRouter as Router,
  Swtich,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sign_up">
        <SignUp />
      </Route>
    </Router>
  );
}

export default App;
