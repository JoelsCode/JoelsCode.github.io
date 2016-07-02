import React, {Component} from 'react';

class Typed extends Component {
    render() {
        return (
            <div>
                <span id="typed"></span>
            </div>
        );
    }

    componentDidMount() {
        $(function () {
            $("#typed").typed({
                strings: ["i <strong> Plan <strong/>. " , "i <strong> Design <strong/>.", "i <strong> Develop <strong/>.", "i <strong> Solve <strong/>."],
                typeSpeed: 100,
                loop: true,
                backdelay: 500,
            });
        });
    }
}

export default Typed;