import Home from './Home/Home';
import Login from './Uthentication/Login/Login';
import Registration from './Uthentication/Registretion/Registretion';
import { Route, Switch } from 'react-router-dom';
import ForgotPassword from './Uthentication/ForgotPassword/ForgotPassword';
import Profile from './Profile/Profile';
import TaskPage from './TaskPage/TaskPage';
import TaskCategoryModal from './Menu/TaskCategoryModal';

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
      <Route exact path='/taskcategory' component={TaskCategoryModal} />
    </Switch>
  );
}

export default App;
