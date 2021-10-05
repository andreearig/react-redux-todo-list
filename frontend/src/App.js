import SignUp from './components/SignUp'
import Login from './components/Login'
import Todo from './components/Todo'
import NotFound from './components/NotFound'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/todo" component={Todo} />
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;