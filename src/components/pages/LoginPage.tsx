import Register from './RegisterPage';
import Home from './Home';
import { Login } from '../pages/Login';
import { AuthProvider } from '../../Providers/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};
