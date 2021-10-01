import './App.css';
import Home from './components/home_component/Home';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Home/>
      <Switch>
        <Route path="/">
        
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
