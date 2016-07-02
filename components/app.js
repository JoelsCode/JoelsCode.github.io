import React, {Component} from 'react';
import Canvas from './Canvas'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import Layout from './Layout'
import Particles from './Particles'

class App extends Component {
    render() {
        return (
            <div >
                <Layout />
               <Particles />
            </div>
        );
    }
}

export default App;

