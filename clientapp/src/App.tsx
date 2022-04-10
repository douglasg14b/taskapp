import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import BottomNav from './layout/bottomNav';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppTopBar from './layout/appTopBar';

function App() {
  return (
    <Container disableGutters sx={{minHeight: '100vh', display: 'flex'}}>
      <Grid container direction="column">
        <Grid item flexGrow="1" className='viewport'>
          <AppTopBar/>
          <Outlet/>
          
        </Grid>
        <Grid item>
          <BottomNav/>
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
