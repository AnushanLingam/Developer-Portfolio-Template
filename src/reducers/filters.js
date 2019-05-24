import data from '../data/profile';

let categories = {};

data.categories.forEach((category) => categories[category] = true);

export default (state = categories, action) => {
    switch(action.type) {
        case "FILTER": 
            return {
                ...state,
                [action.category]: !state[action.category]
            }
        default:
            return state;
    }
}