import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TasksItem extends Component {
    render() {
        return (
            <div>
                <div>{this.props.username}</div>
                <div>{this.props.email}</div>
                <div>{this.props.text}</div>
                <div>{this.props.status}</div>
            </div>
        )
    }
}

TasksItem.propTypes = {
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default TasksItem