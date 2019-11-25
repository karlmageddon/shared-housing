import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import heroImage from '../../assets/images/Home/landingpage-hero.jpg';

const useStyles = makeStyles(theme => ({
  statusTitle: {
    color: 'gray',
    textAlign: 'center',
    margin: '0 0 50px 0',
    textDecoration: 'underline',
  },
  heroContainer: {
    position: 'relative',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 10%',
    height: '100%',
    color: 'white',
  },
  heroContainerContent: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    display: 'inline',
    boxDecorationBreak: 'clone',
    padding: theme.spacing(3),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0 , 0 , 0.8))',
  },
  newsFeed: {
    marginTop: '20px',
    width: 'fit-content',
  },
  heroText: {
    fontFamily: '"Raleway", sans-serif',
  },
}));

const HeroImage = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.heroContainer}>
      {<img style={{ display: 'none' }} src={heroImage} alt="background" />}
      <div className={classes.overlay}>
        <div className={classes.heroContainerContent}>
          <Typography variant="h1" className={classes.heroText}>
            Lorem Ipsum
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default HeroImage;
