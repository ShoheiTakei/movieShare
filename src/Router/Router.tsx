import { Route, Switch } from 'react-router-dom';
import { DetailPage } from '../components/pages/DetailPage';
import { MyPage } from '../components/pages/MyPage';
import { Page404 } from '../components/pages/Page404';
import { TopPage } from '../components/pages/TopPage';
import { homeRoutes } from './HomeRoutes';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <TopPage />} />
      <Route path="/mypage" render={() => <MyPage />} />
      <Route path="/detail" render={() => <DetailPage />} />
      <Route path="*" render={() => <Page404 />} />
    </Switch>
  );
};

{
  /* <Route
path="/home"
render={({ match: { url } }) => (
  <Switch>
    {homeRoutes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={`${url}${route.path}`}
      >
        <>{route.children}</>
      </Route>
    ))}
  </Switch>
)}
/> */
}
