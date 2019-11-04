import React, {Component} from 'react'
import TasksItem from '../presentation/TasksItem'
import {connect} from 'react-redux'
import {fetchTasks} from "../../actions/actions";

class Tasks extends Component {

    componentDidMount() {

        this.props.dispatch(fetchTasks())
    }

    render() {

        const taskItems = this.props.tasks.map((task, i) => {
            return (
                <li key={i}>
                    <TasksItem id={task.id}
                               username={task.username}
                               email={task.email}
                               text={task.text}
                               status={task.status}
                    />
                </li>)
        });

        return (
            <div>
                {
                    (this.props.tasks.length > 0) ? <ul> {taskItems} </ul> : <div>"No any tasks" </div>
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks
    }
};


export default connect(mapStateToProps)(Tasks);