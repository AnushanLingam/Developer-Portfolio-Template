import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import history from "./history";

import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component={HomePage} />
                        <Route component={NotFound} />
                    </Switch>

                </div>
            </Router>
        )
    }
}
const NotFound = () => <h1>Not Found</h1>
export default App
