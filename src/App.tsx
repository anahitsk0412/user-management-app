import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import { store } from './utils/Store';
import { UserManagementTheme } from './utils/Theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={UserManagementTheme}>
        <Layout />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
