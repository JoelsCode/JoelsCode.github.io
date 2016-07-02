import React, {Component} from 'react';



class SocialButton extends Component {
    render() {
        return (
            <a href={this.props.src}>
                <img className="socialbtn" src={this.props.img} id={this.props.name} alt={this.props.name}/>
            </a>
        )
    }
}


class SocialMedia extends Component {
    render() {
        return (
            <div style={{paddingTop: "20px"}}>
                {this.renderBtn() }
                <hr />
            </div>
        );
    }

    renderBtn() {
        let socialArr =
            [{ name: "Twitter", img: "./twitter.png", src: "https://twitter.com/JoelCodes", id: 0 },
                { name: "Linkedin", img: "./link.png", src: "https://www.linkedin.com/in/joel-cedano-686ab0a9", id: 1 },
                { name: "Instagram", img: "./instagram.png", src: "https://instagram.com/JoelCodes", id: 2 }
            ]

        return socialArr.map((obj) => {
            return <SocialButton key={obj.id} src={obj.src} name={obj.name} img={obj.img} />
        })
    }
}





export default SocialMedia;