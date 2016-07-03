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
                                   <footer style={{padding: "50px"}}><h4>Joel Codes © 2016</h4> <h3>Miami, Florida</h3></footer>
            </div>
        );
    }
}

export default App;

