import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { store } from './utils/Store';
import { UserManagementTheme } from './utils/Theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={UserManagementTheme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
