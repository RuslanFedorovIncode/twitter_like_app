import './App.css';
import { Home } from './pages';
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
