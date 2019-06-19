import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import {Grid, Typography} from '@material-ui/core';

import portalLogo from './portalLogo.png';

const TitleBar = (props) => {
  return (
    <AppBar className="title-bar">
      <Grid container direction="row">
        <Grid item lg={1} md={1} sm={2} className="hidden-mobile">
          <img src={portalLogo} alt="Logo" height={70} width={70}/>
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={9} className="banner-container">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" className="banner-text">
                Data Platform
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className="banner-subtext">
                Cox Automotive
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={2} md={2} className="initial-container">
          <span className="letter"><a href="/" className="initial">{ props.initial }</a></span>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TitleBar;

TitleBar.propTypes = {
  initial: PropTypes.string.isRequired,
};