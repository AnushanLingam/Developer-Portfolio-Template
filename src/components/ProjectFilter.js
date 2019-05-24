import React from 'react';
import { withStyles, } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { React as ReactIcon, Cellphone, LanguageJavascript } from 'mdi-material-ui';
import { Paper, Typography } from '@material-ui/core';

import { updateFilter } from '../actions/filters';

const styles = {
    container: {
        justifyContent: "center"
    },
    heading: {
        display: "flex",
        justifyContent: "center",
        padding: 10
    },
    paperStyle: {
        margin: 10
    },

};

const ProjectFilters = (props) => {
    const { classes, filters, categories } = props;

    const handleChange = (filterName) => {
        console.log(filterName);
        props.updateFilter(filterName);
    }

    return (
        <Paper className={classes.paperStyle}>
            <FormGroup row className={classes.container}>
                {
                    categories.map((category) => {
                        return <FormControlLabel
                            control={<Checkbox color="primary"
                                checked={filters[category]}
                                onChange={() => handleChange(category)}
                                value={`${category}`} />}
                            key={category}
                            label={`${category} Projects`}
                        />
                    })
                }
            </FormGroup>
        </Paper>
    )

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        categories: state.categories
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (filterName) => dispatch(updateFilter(filterName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProjectFilters));


/*

                <FormControlLabel
                    control={<Checkbox color="primary" icon={<ReactIcon fontSize="large" />}
                        checked={filters.react}
                        onChange={() => handleChange('REACT')}
                        checkedIcon={<ReactIcon fontSize="large" />} value="react" />}
                    label="React Projects"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" icon={<Cellphone fontSize="large" />}
                        checked={filters.flutter}
                        onChange={() => handleChange('FLUTTER')}
                        checkedIcon={<Cellphone fontSize="large" />} value="flutter" />}
                    label="Flutter Projects"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" icon={<LanguageJavascript fontSize="large" />}
                        checked={filters.javascript}
                        onChange={() => handleChange('JAVASCRIPT')}
                        checkedIcon={<LanguageJavascript fontSize="large" />} value="javascript" />}
                    label="Javascript Projects"
                />


*/