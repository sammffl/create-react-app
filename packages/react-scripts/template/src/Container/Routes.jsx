import LoadingPage from '../Views/LoadingPage';
import Loadable from 'react-loadable';

const LoadableComponent = path =>
  Loadable ({
    loader: () => import (`../Views/${path}`),
    loading: LoadingPage,
  });

export default [
  {
    path: '/',
    exact: true, // 默认首页
    component: LoadableComponent ('Index'),
    title: '首页',
  },
  {
    path: '/test',
    exact: true, // 默认首页
    component: LoadableComponent ('Test'),
    title: '测试',
  },
];
