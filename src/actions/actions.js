import actionTypes from '../constants/actionTypes'

function taskReceived(tasks) {
    return {
        type: actionTypes.TASK_RECEIVED,
        tasks: tasks
    }
}

export function fetchTasks() {
    return dispatch => {
        return fetch('/tasks')
            .then((response) =>
                response.json()
            )
            .then((data) =>
                dispatch(taskReceived(data.data))
            )
            .catch((e) => {
                console.log(e);
            })
    }
}