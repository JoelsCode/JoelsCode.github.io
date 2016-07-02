import React, {Component} from 'react';
import Typed from '../Typed'
import SocialMedia from '../SocialMedia'

class Header extends Component {
    render() {
        return (
            <div id="header">
                 <img id="profileimg" src="https://pbs.twimg.com/profile_images/705795656896659456/EADb6yWk.jpg" alt=""/>
                 <h1>Joel Codes</h1>
                <Typed /> 
                <SocialMedia />
            </div>
        );
    }
}

export default Header;