import React from 'react';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';
import { withWidth } from '@material-ui/core';
import ProjectPage from './ProjectsPage';
import ProfileBox from './ProfileBox';


const styles = {
};


const HomePage = (props) => {
    return (
        <div>
            <Header />
            <ProfileBox />
            <ProjectPage />
        </div>
    );
}



export default  withWidth()(withStyles(styles)(HomePage));