import { Route, Switch } from 'react-router-dom';
import { DetailPage } from '../components/pages/DetailPage';
import { MyPage } from '../components/pages/MyPage';
import { Page404 } from '../components/pages/Page404';
import { HomePage } from '../components/pages/HomePage';
import { homeRoutes } from './HomeRoutes';
import { SignInPage } from '../components/pages/SignInPage';
import { SignUpPage } from '../components/pages/SignUpPage';

// パスがルートの場合は、何を表示すればいいか？
export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <SignInPage />} />
      <Route path="/signup" render={() => <SignUpPage />} />
      <Route path="/home" render={() => <HomePage />} />
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
