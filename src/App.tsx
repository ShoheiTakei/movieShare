import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Router } from './Router/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
