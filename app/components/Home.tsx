import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Home.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

import Textarea from '../features/textarea/Textarea';
import routes from '../constants/routes.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      // width: theme.spacing(16),
      maxWidth: 'sm',
      height: theme.spacing(16),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home(): JSX.Element {
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Medpad
          </Typography>
          <Button component={Link} to={routes.COUNTER} color="inherit">
            Counter
          </Button>
        </Toolbar>
      </AppBar>

      <Textarea />
    </Container>
    // <div className={styles.container} data-tid="container">
    //   <h2>Home</h2>
    //   <Link to={routes.COUNTER}>to Counter</Link>
    // </div>
  );
}
