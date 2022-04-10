import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';

import NotificationsIcon from '@mui/icons-material/Notifications';

import { useLocation } from 'react-router-dom';

export default function AppTopBar() {
    const location = useLocation();

    return (
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Typography variant="h6" gutterBottom component="div">
              {location.pathname}
            </Typography>
          </Box>
          <Box sx={{flexGrow: 1}}/>
          <Box sx={{display: 'flex'}}>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }