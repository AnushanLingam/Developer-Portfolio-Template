import data from '../data/profile';

let categories = {};

// data.categories.forEach((category) => categories[category] = category);

export default (state = data.categories, action) => {
    switch(action.type) {
        default:
            return state
    }
}