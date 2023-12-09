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
  return (
    <div>
    <div id='title'>Comedy Movies</div>
    <Box sx={{ width: '100%',padding:'40px',backgroundColor:'black'  }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
        <Grid item xs={3}>
          <img src={require('./ImagesCategory/Comedy/Millers.webp') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/BareillyKiBarfi.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Tmins.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Moms.webp') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Blended.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Dhamaal.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/LukaChuppi.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Oso.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Minions.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Kungfu.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/John.jpeg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/MrBean.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Little.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/dilemma.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Mad.webp') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/ftwo.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Rrk.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Gang.webp') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Three.jpg') } alt="Not found"></img>
        </Grid>
        <Grid item xs={3}>
        <img src={require('./ImagesCategory/Comedy/Comali.webp') } alt="Not found"></img>
        </Grid>
      </Grid>
    </Box>
    </div>
    
  );
}