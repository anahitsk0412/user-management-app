import { createBrowserRouter } from 'react-router-dom';

import { CreateUserScreen } from './screens/users/CreateUser';
import { CurrentUserScreen } from './screens/users/CurrentUser';

export const router = createBrowserRouter([
  { path: '/', element: <CreateUserScreen /> },
  { path: '/user', element: <CurrentUserScreen /> },
]);
