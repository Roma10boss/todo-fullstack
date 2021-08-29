import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const jwt = localStorage.getItem('jwt');
    return <Route {...rest} render = {props => jwt ? <Component {...props} /> : <Redirect to='/login' />} />
};

export default ProtectedRoute;