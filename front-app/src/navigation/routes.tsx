import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import the components
import Home from '../pages/Home';
// import Signup from './pages/auth/Signup';
import Login from '../pages/auth/Login';
//
// import NotFound from './pages/NotFound';
import PrivateRoute from './PrivateRoute';
// import ForgetPassword from './pages/auth/ForgetPassword';
// import ResetPassword from './pages/auth/ResetPassword';
// import GroupForm from './pages/groups/GroupForm';
// import GroupDetail from './pages/groups/GroupDetail';
// import UserForm from './pages/groups/users/UserForm';
// import Tos from './pages/common/Tos';
// import PrivacyPolicy from './pages/common/PrivacyPolicy';
// import GroupIndex from './pages/groups/GroupIndex';
// import BoardForm from './pages/groups/boards/BoardForm';
// import BoardDetail from './pages/groups/boards/BoardDetail';
// import UserDetail from './pages/groups/users/UserDetail';
// import CalendarDetail from './pages/groups/calendars/CalendarDetail';
// import CalendarForm from './pages/groups/calendars/CalendarForm';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    { /* Auth関連 */ }
    {/*<Route exact path="/signup" component={Signup} />*/}
    <Route exact path="/login" component={Login} />
    {/*<Route exact path="/forget-password" component={ForgetPassword} />*/}
    {/*<Route exact path="/reset-password" component={ResetPassword} />*/}
    
    {/*<Route exact path="/tos" component={Tos} />*/}
    {/*<Route exact path="/privacy" component={PrivacyPolicy} />*/}
    
    {/*<PrivateRoute exact path="/groups" component={GroupIndex} />*/}
    {/*{ /* Group作成関連 }*/}
    {/*<PrivateRoute exact path="/groups/:id" component={GroupDetail} />*/}
    {/*<PrivateRoute exact path="/groups/:id/form" component={GroupForm} />*/}
    {/*/!* <PrivateRoute exact path="/groups/:groupId/users/:id/form" component={UserForm} /> *!/*/}
    
    {/*<PrivateRoute exact path="/groups/:groupId/boards/:id" component={BoardDetail} />*/}
    {/*<PrivateRoute exact path="/groups/:groupId/boards/:id/form" component={BoardForm} />*/}
    
    {/*<PrivateRoute exact path="/groups/:groupId/calendars/:id" component={CalendarDetail} />*/}
    {/*<PrivateRoute exact path="/groups/:groupId/calendars/:id/form" component={CalendarForm} />*/}
    
    {/*<PrivateRoute exact path="/groups/:groupId/users/:id" component={UserDetail} />*/}
    {/*<PrivateRoute exact path="/groups/:groupId/users/:id/form" component={UserForm} />*/}
    
    {/*<Route path="*" component={NotFound} />*/}
  </Switch>
);

export default Routes;
