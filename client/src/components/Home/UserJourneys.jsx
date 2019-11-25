import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import outreachUserJourneyImage from '../../assets/images/Home/outreach-journey.png';
import stabilizationUserJourneyImage from '../../assets/images/Home/stabilization-journey.png';
import navUserJourneyImage from '../../assets/images/Home/nav-journey.png';
import tenantUserJourneyImage from '../../assets/images/Home/tenant-journey.png';

const useStyles = makeStyles(() => ({
  journeyTitle: {
    color: '#212322',
    textAlign: 'center',
    margin: '0 0 50px 0',
    fontFamily: '"Raleway", sans-serif',
  },
  journeysImage: {
    width: '100%',
  },
  formControl: {
    width: '100%',
    margin: '30px 0 0 0',
    border: '1px solid gray',
    borderRadius: '4px',
    padding: '15px',
  },
}));

const JOURNEY_IMAGES = {
  0: outreachUserJourneyImage,
  1: stabilizationUserJourneyImage,
  2: navUserJourneyImage,
  3: tenantUserJourneyImage,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UserJourney = () => {
  const classes = useStyles();
  const [value, setJourney] = React.useState(0);

  const handleChange = (event, newJourney) => {
    setJourney(newJourney);
  };

  return (
    <div className="value-section">
      <div className="value-title">
        <Typography variant="h4" className={classes.journeyTitle}>
          User Journeys
        </Typography>
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Outreach" {...a11yProps(0)} />
            <Tab label="Stabilization" {...a11yProps(1)} />
            <Tab label="Navigation" {...a11yProps(2)} />
            <Tab label="Tenant" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className="values-photo-container">
            <img
              className={classes.journeysImage}
              src={JOURNEY_IMAGES[value]}
              alt="value"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="values-photo-container">
            <img
              className={classes.journeysImage}
              src={JOURNEY_IMAGES[value]}
              alt="value"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="values-photo-container">
            <img
              className={classes.journeysImage}
              src={JOURNEY_IMAGES[value]}
              alt="value"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="values-photo-container">
            <img
              className={classes.journeysImage}
              src={JOURNEY_IMAGES[value]}
              alt="value"
            />
          </div>
        </TabPanel>
      </div>
    </div>
  );
};

export default UserJourney;

/* eslint react/prop-types: "off" */
