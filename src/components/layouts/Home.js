import React, {Component} from 'react';
import Tasks from '../containers/Tasks'

class Home extends Component {
    render() {
        return (
            <div>
                <div>Список задач</div>
                <div>
                    <Tasks/>
                </div>
            </div>
        )
    }
}

export default Home;