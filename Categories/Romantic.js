import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

import './Categories.css'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchAppBar() {
  const nav=useNavigate();
  const handleplay = ()=>
  {
    nav('/Royal')
  }
  return (
    <div>
    <div id='title'>Romantic Movies</div>
    <Box sx={{ width: '100%',padding:'40px',backgroundColor:'black'  }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
        <Grid item xs={3}>
          <img src={require('./ImagesCategory/Romance/Holidate.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/RoyalTre.jpg') } onClick={handleplay} alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/MidnightSun.webp') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/ZoyaFactor.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/FindingYou.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/Band.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/HowtoLose.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/LastSong.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/LoveAgain.avif') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/LoveGu.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/MeBeforeYou.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/Alai.jpeg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/Okk.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/Aashiqui.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/SetItUp.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/Sitaramam.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/TenThings.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/Venus.png') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/WorkIt.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Romance/Crazy.jpg') } alt="Not found"></img>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}