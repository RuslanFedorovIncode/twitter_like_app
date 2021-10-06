import './App.css';
import { Home,Navbar} from './pages';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/register">
          <h1>Register Page</h1>
        </Route>
        <Route path='/profile_page'>
          <h1>Profile_page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
