import React from 'react';

import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3), // only used when nav is fixed
    flexGrow: 1,
  },
  NavBar: {
    boxShadow: 'none',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
  ToolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  LeftContent: {
    width: '100%',
  },
  RightContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    width: '220px',
    marginRight: theme.spacing(2),
    fontFamily: '"Patua One", sans-serif',
  },
  HomeIcon: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

const MainNav = () => {
  const classes = useStyles();

  const buttonWithRoute = ({ name, onClick, path }) => {
    const handleClick = history => () => {
      if (onClick) {
        onClick();
      }
      history.push(path);
    };

    return withRouter(({ history }) => (
      <Button classes={{ root: classes.button }} onClick={handleClick(history)}>
        {name}
      </Button>
    ));
  };
  const DashboardButton = buttonWithRoute({
    name: 'Dashboard',
    path: '/dashboard',
  });

  const NewsButton = buttonWithRoute({
    name: 'News',
    path: '/news',
  });

  const DemoButton = buttonWithRoute({
    name: 'Demo',
    path: '/demo',
  });

  const PrototypeFormButton = buttonWithRoute({
    name: 'Prototype-Form',
    path: '/prototype-form',
  });
  const StakeholdersButton = buttonWithRoute({
    name: 'Stakeholders',
    path: '/stakeholders',
  });
  const TeamRosterButton = buttonWithRoute({
    name: 'Team Roster',
    path: '/team',
  });
  const AgileManifestoButton = buttonWithRoute({
    name: 'Agile Manifesto',
    path: '/agile-manifesto',
  });

  return (
    <nav className={classes.root}>
      <AppBar color="primary" className={classes.NavBar}>
        <Toolbar className={classes.ToolBar} title="Shared Housing">
          <HomeIcon className={classes.HomeIcon} />
          <Typography variant="h5" className={classes.title}>
            Shared Housing
          </Typography>
          <div className={classes.RightContent}>
            <NewsButton />
            <DashboardButton />
            <DemoButton />
            <PrototypeFormButton />
            <StakeholdersButton />
            <TeamRosterButton />
            <AgileManifestoButton />
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default MainNav;
