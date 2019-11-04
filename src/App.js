import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './stores/store'
import './App.css';
import Home from "./components/layouts/Home";

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
      );
    }
    }

    export default App;
