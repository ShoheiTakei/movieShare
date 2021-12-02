import { DetailPage } from '../components/pages/DetailPage';
import { MyPage } from '../components/pages/MyPage';
import { Page404 } from '../components/pages/Page404';
import { HomePage } from '../components/pages/HomePage';

export const homeRoutes = [
  {
    path: '/home',
    exact: false,
    children: <HomePage />,
  },
  {
    path: '/mypage',
    exact: false,
    children: <MyPage />,
  },
  {
    path: '/detail',
    exact: false,
    children: <DetailPage />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
];
