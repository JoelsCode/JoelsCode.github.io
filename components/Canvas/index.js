import React, {Component} from 'react';

class Canvas extends Component {
    render() {
        return (
            <canvas style={this.getCss()} width="1600px" height="400px" id="snake"> </canvas>
        );
    }

    getCss() {
        return {
            position: "absolute",
            top: 0,
            zIndex: -10,
            transform: "translateX(-50%)"

        }
    }
}

export default Canvas;