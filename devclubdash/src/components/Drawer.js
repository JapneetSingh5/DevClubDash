import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/HomeRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DeployIcon from '@material-ui/icons/LocalShippingRounded';
import ProjectsIcon from '@material-ui/icons/DashboardRounded';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';
import '../App.css'



const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#3a3a3c',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#979797',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffffff',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
      background: {
        default: '#1c1c1e',
        paper:  '#3a3a3c',
    },
    spacing: [0, 4, 8, 16, 32, 64],
    
  }});

const icons = [<HomeIcon />,<FormatListBulletedRoundedIcon />,<PersonRoundedIcon />,<DeployIcon />,<ProjectsIcon />,<TodayRoundedIcon />,<PeopleAltRoundedIcon />,<AllInboxIcon />];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    spacing: theme.spacing(4),
  },
  appBar: {
    width: `calc(79% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    marginTop: '1%',
    marginLeft: '10%',
    marginRight: '20%',
    boxShadow: 0,
  },
  drawer: {
    width: '10%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: '#1c1c1e',
    padding: theme.spacing(3),
  },
}));

export default function LeftDrawer() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          {['Home', 'My Tasks', 'Profile', 'Deploy', 'Projects', 'Events', 'Users', 'Resources'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <main className={classes.content}>
      </main>
    
      </div>
      </ThemeProvider>
  );
}