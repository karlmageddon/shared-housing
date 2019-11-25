import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import { NewsFeed } from '../common';

import landingpageScreenshot from '../../assets/images/Home/landingpagescreenie.png';
import sampleScreenshot1 from '../../assets/images/Home/statussample1.png';
import sampleScreenshot2 from '../../assets/images/Home/statussample2.png';

const useStyles = makeStyles(theme => ({
  statusTitle: {
    color: '#212322',
    textAlign: 'center',
    margin: '0 0 50px 0',
    fontFamily: '"Raleway", sans-serif',
  },
  feedPost: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    height: 500,
    boxShadow: 'none',
  },
  feedPanels: {
    width: '100%',
    margin: '20px 20px 20px 0',
  },
  panel: {
    flexDirection: 'column',
  },
  panelImage: {
    width: '100%',
  },
  panelText: {
    marginTop: '20px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  statusHeader: {
    color: '#4E4B48',
    marginBottom: '20px',
  },
}));

const Status = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="status-section">
      <div className="status-title">
        <Typography variant="h4" className={classes.statusTitle}>
          State Of The Project
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h6" className={classes.statusHeader}>
            Updates
          </Typography>
          <Paper className={classes.feedPost}>
            <Container>
              <div className={classes.feedPanels}>
                <ExpansionPanel
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                  className={classes.panel}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading} variant="caption">
                      November 22, 2019
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Landing Page Updated
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.panel}>
                    <img
                      className={classes.panelImage}
                      src={landingpageScreenshot}
                      alt="panel"
                    />
                    <Typography className={classes.panelText} variant="body1">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio.
                    </Typography>
                    <Typography className={classes.panelText} variant="body1">
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                  className={classes.panel}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading} variant="caption">
                      November 3, 2019
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Agile Manifesto Uploaded
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.panel}>
                    <img
                      className={classes.panelImage}
                      src={sampleScreenshot1}
                      alt="panel"
                    />
                    <Typography className={classes.panelText} variant="body1">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio.
                    </Typography>
                    <Typography className={classes.panelText} variant="body1">
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                  className={classes.panel}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading} variant="caption">
                      September 20, 2019
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Roster Page And Demo Page Completed
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.panel}>
                    <img
                      className={classes.panelImage}
                      src={sampleScreenshot2}
                      alt="panel"
                    />
                    <Typography className={classes.panelText} variant="body1">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio.
                    </Typography>
                    <Typography className={classes.panelText} variant="body1">
                      Nulla facilisi. Phasellus sollicitudin nulla et quam
                      mattis feugiat. Aliquam eget maximus est, id dignissim
                      quam.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" className={classes.statusHeader}>
            Development Changelog
          </Typography>
          <NewsFeed />
        </Grid>
      </Grid>
    </div>
  );
};

export default Status;
