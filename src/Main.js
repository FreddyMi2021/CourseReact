import { Route } from 'react-router';
import PrivateRoute from './Auth/PrivateRoute';
import { BackendPage } from './Pages/BackendPage/Backend';
import Dashboard from './Pages/Dashboard/Dashboard';
import Environnement from './Pages/Environnement/Environnement';
import { FrontendPage } from './Pages/FrontendPage/FrontEnd';
import { LoadingPage } from './Pages/LoadingPage/LoadingPage';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { Projects } from './Pages/Projects/Projects';
import { Sprints } from './Pages/Sprints/Sprints';

function Main() {
    let admin = JSON.parse(localStorage.getItem('currentAdmin'));
    
    return (
          <>
            <div className="ml-16 px-4 z-0">
                <PrivateRoute exact path='/' component={Dashboard}/>
                <PrivateRoute exact path='/environment' component={Environnement}/>
                <PrivateRoute exact path='/front_end_page' component={FrontendPage}/>
                <PrivateRoute exact path='/back_end_page' component={BackendPage}/>
                <PrivateRoute exact path='/projects' component={Projects}/>
                <PrivateRoute exact path='/sprints' component={Sprints}/>
                <Route exact path='/loading' component={LoadingPage}/>
                {
                admin ? '' : <Route exact path='/login_page' component={LoginPage} />
                }
            </div>
          </>
    );
}

export default Main;
