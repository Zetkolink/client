import constants from '../constants/actionTypes'

let initialState = {
    tasks: []
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch (action.type) {


        case constants.TASK_RECEIVED:
            updated['tasks'] = action.tasks;
            return updated;

        default:
            return state;
    }
}