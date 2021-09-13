import './App.scss';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Addtaref from './pages/addtaref/Addtaref';


function App() {
  return (
    <div className="App">  
      <Switch>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/add" component={Addtaref}></Route>
      </Switch>
    </div>
  );
}

export default App;
