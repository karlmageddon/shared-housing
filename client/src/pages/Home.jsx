import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../components/Home/HeroImage';
import Intro from '../components/Home/Intro';
import Status from '../components/Home/Status';
import Concept from '../components/Home/Concept';
import Record from '../components/Home/Record';
import UserJourneys from '../components/Home/UserJourneys';

import { SectionContainer } from '../components/common';
import Layout from './Layout';

const useStyles = makeStyles(() => ({
  divider: {
    margin: '35px 0',
    border: '0',
    borderTop: '1px solid rgba(0,0,0,.1)',
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <HeroImage />
      <SectionContainer>
        <Intro />
        <hr className={classes.divider} />
        <Status />
        <hr className={classes.divider} />
        <Concept />
        <hr className={classes.divider} />
        <Record />
        <hr className={classes.divider} />
        <UserJourneys />
      </SectionContainer>
    </Layout>
  );
};

export default HomePage;
