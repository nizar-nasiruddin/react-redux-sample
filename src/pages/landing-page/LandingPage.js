import React from 'react';
import {Card, Grid, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';

import withOktaAuth from '../../authentication/Authentication';
import TitleBar from '../../components/appBar/appBar';

class LandingPage extends React.Component {
 render() {
   return (
     <div className='landing-page'>
       <TitleBar initial={ this.props.initial }/>
       <Grid container direction="row" className="container" spacing={10}>
         <Grid item lg={3} md={3} sm={10} xs={10}>
          <Card className="card">
            <CardActionArea className="card-action-area">
              <Icon className="card-icon">file_copy</Icon>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Registration
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
         </Grid>
         <Grid item lg={3} md={3} sm={10} xs={10}>
           <Card className="card">
             <CardActionArea className="card-action-area">
               <Icon className="card-icon">check_circle_outline</Icon>
               <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
                   Validation Services
                 </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
         </Grid>
         <Grid item lg={3} md={3} sm={10} xs={10}>
           <Card className="card">
             <CardActionArea className="card-action-area">
               <Icon className="card-icon">search</Icon>
               <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
                   Search
                 </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
         </Grid>
       </Grid>
     </div>
   )
 }
}

export default withOktaAuth(LandingPage);

LandingPage.propTypes = {
  initial: PropTypes.string.isRequired,
};