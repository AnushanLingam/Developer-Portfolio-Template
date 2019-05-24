import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';

const styles = {
    card: {
        margin: 20,
        height: 410,
        minWidth: 150,
        maxWidth: 320,
        border: "5px solid white",
        borderRadius: "10px"
    },
    cardContent: {
        height: 130,
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 200,
    },
    chip: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 15,
        padding: 0
    },
    
};


const SimpleCard = (props) => {
    const { classes, projectData } = props;

    return (
        <Card raised={true} className={classes.card}>
            <CardMedia
                className={classes.media}
                image={projectData.screenshot}
                title={projectData.title}
            />
            <CardContent className={classes.cardContent}>
                <Grid container={true}  alignContent="flex-start" direction="row" alignItems="center" wrap="wrap">
                    <Typography className={classes.title} color="inherit" gutterBottom>
                        {projectData.title}
                    </Typography>
                    <Chip color="primary" label={projectData.type} className={classes.chip} variant="outlined" />
                </Grid>


                <Typography className={classes.pos} color="textSecondary">
                    {projectData.description}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    projectData.repo !== undefined ? 
                    <Button color="primary" target="_blank" href={projectData.repo} size="small">Github</Button>
                    : null
                }
                {
                    projectData.demo !== undefined ? 
                    <Button color="primary" target="_blank" href={projectData.demo} size="small">Demo</Button>
                    : null
                }
                {
                    projectData.npm !== undefined ? 
                    <Button color="primary" target="_blank" href={projectData.npm} size="small">NPM</Button>
                    : null
                }
            </CardActions>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(SimpleCard));