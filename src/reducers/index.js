
import { combineReducers } from 'redux';

import projectsReducer from './projects'
import filtersReducer from './filters';
import profileReducer from './profile';
import categoryReducer from './categories';

const rootReducer = combineReducers({
    projects: projectsReducer,
    filters: filtersReducer,
    profile: profileReducer,
    categories: categoryReducer
});

export default rootReducer;