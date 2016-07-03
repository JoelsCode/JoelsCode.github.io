import React, {Component} from 'react';

class Canvas extends Component {
    render() {
        return (
            <div style={this.getCss()} width="1600px" height="400px" id="snake"> </div>
        );
    }

    getCss() {
        return {
            position: "absolute",
            top: 0,
            zIndex: -10,
            height: "505px",
            width: "100%",
            background: "url('./tower.jpg') fixed no-repeat",
            backgroundSize: "cover"

        }
    }
}

export default Canvas;