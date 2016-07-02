import React, {Component} from 'react';

class SideImgV2 extends Component {
    render() {
        return (
            <div className="newcontainer">
                <div className="row">
                    <div id="imgleft" className="col-xs-6">
                        <img className="img-responsive" src={this.props.img} alt=""/>
                    </div>
                    <div id="text" className="col-xs-6">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.paragraph}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default SideImgV2;