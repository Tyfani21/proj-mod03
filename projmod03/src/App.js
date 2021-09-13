import './App.scss';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Addtaref from './pages/addtaref/Addtaref';
import Header from './components/shared/header/header'
import Footer from './components/shared/footer/footer'

function App() {
  return (
    <div className="App">  
      <Header/>
      <Switch>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/add" component={Addtaref}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
