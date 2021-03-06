import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Paper from "@mui/material/Paper"


import EventIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import React, { useEffect } from "react";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { NavLink, useLocation } from 'react-router-dom';
export default function BottomNav() {
    const location = useLocation();
    const [value, setValue] = React.useState<number | string>(0);
    useEffect(() => {
      setValue(location.pathname)
    }, [location])

    return (
      <Box sx={{ display: 'flex' }}>
        <Paper elevation={5} square sx={{ display: 'flex', flexGrow: 1 }}>
          <BottomNavigation
            sx={{ flexGrow: 1 }}
            showLabels
            value={value}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} value="/" component={NavLink} to="/" />
            <BottomNavigationAction label="Tasks" icon={<PlaylistAddCheckIcon />} value="/tasks" component={NavLink} to="/tasks" />
            <BottomNavigationAction label="Reminders" icon={<EventIcon />} />
            <BottomNavigationAction label="Read Later" icon={<BookIcon />} />
          </BottomNavigation>
        </Paper>

      </Box>
    );
  }