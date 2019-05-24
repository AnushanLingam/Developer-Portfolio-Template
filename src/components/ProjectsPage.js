import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import ProjectFilters from './ProjectFilter';
import { connect } from 'react-redux';

import Header from './Header';
import ProjectCard from './ProjectCard';
import filterProjects from '../selectors/projects';

const Div = styled.div`
    display: flex;
    justify-content: center
`;



class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.projects);

    }
    render() {
        return (
            <div>
                <ProjectFilters />
                <Grid container={true} justify="center" alignContent="center" direction="row" alignItems="center" wrap="wrap">
                    {
                        this.props.projects.map((project) => {
                            return <ProjectCard key={project.title} projectData={project} />
                        })
                    }
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: Object.getOwnPropertyNames(state.filters).length === 0 ? state.projects : filterProjects(state.projects, state.filters),
    };
}

export default connect(mapStateToProps)(ProjectsPage);