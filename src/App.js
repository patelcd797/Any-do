import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import { AppContainer } from './App-style';
import Task from './Task/Task';
import Addtask from './Addtask/Addtask';
import Home from './Home/Home';
import Login from './Uthentication/Login/Login';
import Registration from './Uthentication/Registretion/Registretion';
import { Route, Switch } from 'react-router-dom';
import ForgotPassword from './Uthentication/ForgotPassword/ForgotPassword';
import Profile from './Profile/Profile';
import TaskPage from './TaskPage/TaskPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Registration} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/forgotpassword' component={ForgotPassword} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/taskpage' component={TaskPage} />
    </Switch>
  );
}

export default App;
