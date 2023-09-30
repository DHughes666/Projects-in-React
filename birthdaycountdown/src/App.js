import './App.css';
import Birthday from './components/birthday-component';
import { Route, Switch } from 'react-router-dom';
import RouterBirthday from './routes/routerBirthday-component';
import Generate from './components/generate-component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Birthday} />
        <Route exact 
        path='/birthday/:name?/:day?/:month?/' 
        component={RouterBirthday} />
        <Route exact path='/generate' component={Generate} />
      </Switch>
    </div>
  );
}

export default App;
