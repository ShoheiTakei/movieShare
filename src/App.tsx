import { Row } from './components/atom/Row';
import { Banner } from './components/atom/Banner';
import { Nav } from './components/atom/Nav';
import { requests } from './api/requests';
import { TopPage } from './components/pages/TopPage';
import { MyPage } from './components/pages/MyPage';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Page404 } from './components/pages/Page404';
import { DetailPage } from './components/pages/DetailPage';
import { Router } from './Router/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
