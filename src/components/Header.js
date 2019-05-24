import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withWidth } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { GithubCircle, NpmVariantOutline } from 'mdi-material-ui'

const styles = {
    root: {
        flexGrow: 1,
        marginTop: -10,
        marginLeft: -10,
        marginRight: -10,
    },
    grow: {
        flexGrow: 1,
        marginLeft: 200
    },
    mobileGrow: {
        marginLeft: 20,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    options: {
        marginRight: 200,
    },
    textPrimary: {
        color: "#ffffff",
    },
    appBarColor: {
        background: "#0082c8"

    }
};



const ButtonAppBar = (props) => {
    const { classes, profile } = props;
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => () => {
        setState({ ...state, [side]: open });
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBarColor}>
                <Toolbar className={classes.toolBar}>

                    <Typography variant="h5" color="inherit" className={props.width == "xs" ? classes.mobileGrow : classes.grow}>
                        <Link style={{ textDecoration: 'none', color: "white" }} to="/">
                            {profile.name}
                        </Link>
                    </Typography>

                    {props.width == "xs" ? null :
                        <div className={classes.options}>
                            {
                                profile.github !== undefined ?
                                    <a target="blank" href={profile.github}>
                                        <Button className={classes.textPrimary}>
                                            <div style={{ display: "flex", flexDirection: "row", }}>
                                                <GithubCircle />
                                            </div>
                                        </Button>
                                    </a> : null
                            }

                            {
                                profile.npm !== undefined ?
                                    <a target="blank" href={profile.npm}>
                                        <Button className={classes.textPrimary}>
                                            <div style={{ display: "flex", flexDirection: "row", }}>
                                                <NpmVariantOutline />
                                            </div>
                                        </Button>
                                    </a> : null
                            }

                        </div>
                    }


                </Toolbar>
            </AppBar>

        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
    return {
        profile: state.profile
    };
}


export default connect(mapStateToProps)(withWidth()(withStyles(styles)(ButtonAppBar)));
