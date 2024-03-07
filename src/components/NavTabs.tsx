import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/material/Tabs';
import { useState } from 'react';

const NavTabs = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} role="navigation" onChange={handleChange} variant="scrollable">
        <Tab label="FORM" />
        <Tab label="USER" />
      </Tabs>
    </Box>
  );
};

export default NavTabs;
