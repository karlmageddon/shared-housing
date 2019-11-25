import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  recordContent: {
    margin: '50px 0',
    padding: '0 20% 0 20%',
  },
  recordTitle: {
    color: '#212322',
    textAlign: 'center',
    margin: '0 0 10px 0',
    fontFamily: '"Raleway", sans-serif',
  },
  recordHeader: {
    color: '#4E4B48',
    margin: '10px 0 20px 0',
  },
  sectionHeader: {
    color: '#f33a21',
  },
  recordBody: {
    margin: '10px 0',
    lineHeight: '2.25',
  },
}));

const Record = () => {
  const classes = useStyles();
  return (
    <div className={classes.recordSection}>
      <div className="record-title">
        <Typography variant="h4" className={classes.recordTitle}>
          Architecture Decision Record
        </Typography>
      </div>
      <div className={classes.recordContent}>
        <Typography variant="h5" className={classes.recordHeader}>
          Title
        </Typography>
        <Typography variant="h6" className={classes.sectionHeader}>
          Status
        </Typography>
        <Typography variant="body1" className={classes.recordBody}>
          What is the status, such as proposed, accepted, rejected, deprecated,
          superseded, etc.?
        </Typography>
        <Typography variant="h6" className={classes.sectionHeader}>
          Context
        </Typography>
        <Typography variant="body1" className={classes.recordBody}>
          What is the issue that we are seeing that is motivating this decision
          or change?
        </Typography>
        <Typography variant="h6" className={classes.sectionHeader}>
          Decision
        </Typography>
        <Typography variant="body1" className={classes.recordBody}>
          What is the change that we are proposing and/or doing?
        </Typography>
        <Typography variant="h6" className={classes.sectionHeader}>
          Consequences
        </Typography>
        <Typography variant="body1" className={classes.recordBody}>
          What becomes easier or more difficult to do because of this change?
        </Typography>
      </div>
    </div>
  );
};

export default Record;
