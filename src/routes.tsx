import { createBrowserRouter } from 'react-router-dom';

import { CreateUserScreen } from './screens/CreateUser';
import { CurrentUserScreen } from './screens/CurrentUser';

export const routes = [
  { path: '/', element: <CreateUserScreen />, label: 'Form' },
  { path: '/user', element: <CurrentUserScreen />, label: 'User' },
];
