import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { ReactNode } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import CustomRouter from './CustomRouter';
import useRouteMatch from '../hooks/useRouteMatch';
import { routes } from '../routes';

interface RouteInterface {
  path: string;
  element: ReactNode;
  label: string;
}

const MyTabs = () => {
  const routeMatch = useRouteMatch(routes.map((item: RouteInterface) => item.path));
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      {routes.map((route: RouteInterface) => (
        <Tab
          label={route.label}
          value={route.path}
          to={route.path}
          component={Link}
          key={route.label}
        />
      ))}
    </Tabs>
  );
};

const Layout = () => {
  return (
    <CustomRouter>
      <Box sx={{ width: '100%' }}>
        <Container>
          <MyTabs />
          <StyledBox>
            <Routes>
              {routes.map((route: RouteInterface) => (
                <Route path={route.path} element={route.element} key={route.label} />
              ))}
            </Routes>
          </StyledBox>
        </Container>
      </Box>
    </CustomRouter>
  );
};

export default Layout;

const StyledBox = styled(Box)(() => ({
  maxWidth: '400px',
}));
