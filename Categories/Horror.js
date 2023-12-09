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
import Paper from '@mui/material/Paper';
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
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function SearchAppBar() {
  const nav=useNavigate();
  const playcon =() =>
  {
    nav('/Conjuring')
  }
  return (
    <div>
    <div id='title'>Horror Movies</div>
    <Box sx={{ width: '100%',padding:'40px',backgroundColor:'black'  }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
        <Grid item xs={3}>
          <img src={require('./ImagesCategory/Horror/Conjuring.jpg') } onClick={playcon} alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Pari.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Nun.jpeg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/TheBoy.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Train.jpeg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Wrong.jpeg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Ann.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Orphan.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/QuietPlace.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Cabin.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Lebel.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Excorcism.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Vvitch.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/DontBreath.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Tranquility.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/LightsOut.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Stree.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Hereditary.jpeg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/Forest.jpg') }  alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Horror/AmericanHorror.jpg') }  alt="Not found"></img>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}