import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withWidth } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { EmailOutline, GithubCircle, NpmVariantOutline } from 'mdi-material-ui';
import { connect } from 'react-redux';




const styles = {
    bigAvatar: {
        width: 260,
        height: 280,
        boxShadow: "0px 7px 5px 0px rgba(212,204,212,1)"
    },
    paperStyle: {
        margin: 10,
        marginTop: 20,
        padding: 10,
        paddingBottom: 20,
        borderRadius: 10,
        maxWidth: 500,
    },
    divideStyle: {
        border: "1px solid lightgrey",
        borderRadius: "2px",
        margin: 10,
    },
    chip: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 15,
        padding: 0
    },

};

const ProfileBox = (props) => {
    const { classes, profile } = props;


    return <Grid style={{ marginTop: 100, marginBottom: 20 }} container={true} justify="center" alignContent="center" direction="row" alignItems="center" wrap="wrap">
        <Avatar alt={profile.name} src={profile.avatarURL} className={classes.bigAvatar} />
        <Paper style={props.width == "xs" ? null : {marginLeft: 50}} className={classes.paperStyle}>
            <div style={{ margin: 20 }}>
                <Typography variant={"h4"}>{profile.name}</Typography>

            </div>
            <Divider className={classes.divideStyle} variant="fullWidth" />
            <div style={{ margin: 20 }}>
                <Typography style={{ fontSize: 17 }}>{profile.description}</Typography>
            </div>
            <Grid style={{ marginTop: 10, marginBottom: 20 }} container={true} justify="center" alignContent="center" direction="row" alignItems="center" wrap="wrap">
                {
                    profile.codeLiteracy.map((lang) => {
                        return <Chip color="primary" key={lang} label={lang} className={classes.chip} variant="outlined" />
                    })
                }
            </Grid>
            <Divider className={classes.divideStyle} variant="fullWidth" />
            <div style={{ margin: 20, display: "flex", justifyContent: "center", alignItems: "center", }}>
                <EmailOutline color={"primary"} />
                <a style={{ textDecoration: "none" }} href={`mailto:${profile.email}`}>
                    <Typography color="primary" style={{ margin: 10, fontSize: 20, fontWeight: 500 }} >{profile.email}</Typography>
                </a>
            </div>

            {props.width == "xs" ?
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

                    {
                        profile.github !== undefined ?
                            <a style={{ textDecoration: "none" }} target="blank" href={profile.github}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                                    <GithubCircle color="primary" /> <Typography color="primary" style={{ margin: 10, fontSize: 20, fontWeight: 500, }} >Github</Typography>
                                </div>
                            </a> : null
                    }

                    {
                        profile.npm !== undefined ?
                            <a style={{ textDecoration: "none" }} target="blank" href={profile.npm}>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                                    <NpmVariantOutline color="primary" /> <Typography color="primary" style={{ margin: 10, fontSize: 20, fontWeight: 500, }} >NPM</Typography>
                                </div>
                            </a> : null
                    }

                </div>
                : null
            }
        </Paper>
    </Grid>


}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    };
}


export default connect(mapStateToProps)(withWidth()(withStyles(styles)(ProfileBox)));