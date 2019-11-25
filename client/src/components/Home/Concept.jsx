import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import proofOfConceptImage from '../../assets/images/Home/proof-of-concept.jpg';

const useStyles = makeStyles(() => ({
  conceptTitle: {
    color: '#212322',
    textAlign: 'center',
    margin: '0 0 50px 0',
    fontFamily: '"Raleway", sans-serif',
  },
  conceptImage: {
    width: '100%',
  },
  panelText: {
    marginTop: '20px',
  },
}));

const Concept = () => {
  const classes = useStyles();
  return (
    <div className="concept-section">
      <div className="concept-title">
        <Typography variant="h4" className={classes.conceptTitle}>
          The Proof Of Concept
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography className={classes.panelText} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography className={classes.panelText} variant="body1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            className={classes.conceptImage}
            src={proofOfConceptImage}
            alt="status"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Concept;
