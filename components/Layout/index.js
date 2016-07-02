import React, {Component} from 'react';
import Header from '../Header'
import SideImgV2 from '../SideImgV2'
import SideImgV3 from '../SideImgV3'
import Particles from '../Particles'

import SkillStickers from '../SkillStickers'

class Layout extends Component {
    render() {
        return (
            <div className="animated rotateInUpLeft" id="homepage">
                <div className="z-depth-1" id="content">
                    <Header />
                    <SideImgV2 
                        heading= "Web Development"
                        paragraph="2 years ago, i picked up web development again and i havent looked back since. I focus on creating data driven user interfaces for the web. May it be a simple landing page, complex business application, or e-commerce."
                        img="./mac.jpeg"
                         />
                         <hr />
                         <h1>Skills</h1>
                         <SkillStickers />
                         <hr />

                    <SideImgV3
                        heading= "Leadership"
                        paragraph="An entrepreneural spirit drives me to find opportunities were I can collaborate with others to achieve mutual success. I've held leadership positions in Phi Beta Lambda as the president, and have experience setting up and managing meetings/events."
                        img="./busi.jpg"
                        />

                    
                </div>


                    <footer style={{padding: "50px"}}><h4>Joel Codes © 2016</h4></footer>
            </div>
        );
    }
}

export default Layout;