import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  introText: {
    color: '#f33a21',
    textAlign: 'center',
    margin: '50px 0 50px 0',
    fontFamily: '"Montserrat", sans-serif',
    fontStyle: 'italic',
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <div className="status-section">
      <div className="status-title">
        <Typography variant="h3" className={classes.introText}>
          &quot;Lorem ipsum dolor sit amet&quot;
        </Typography>
        <Typography align="center" variant="body1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </Typography>
      </div>
    </div>
  );
};

export default Intro;
