import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor'
import validator from 'validator';


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            text: "",
            heading: "Have a project in mind?"
        }

        this.updateName = this.updateName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateText = this.updateText.bind(this);


    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div id="form-main">
                        <div id="form-div">
                            <h1 style={{ color: "white" }}>{this.state.heading}</h1>
                            <form  className="form" id="form1">

                                <p className={"name " + this.state.nameValid}>
                                    <input placeholder="Full Name" ref="name" onChange={this.updateName} value={this.state.name} name="name" type="text" className={"validate[required,custom[onlyLetter],length[0,100]] feedback-input " + this.state.nameValid} id="name" />
                                </p>

                                <p className={"email " + this.state.emailValid}>
                                    <input placeholder="E-mail" ref="email" onChange={this.updateEmail} value={this.state.email}  name="email" type="text" className={"validate[required,custom[email]] feedback-input " + this.state.emailValid} id="email"  />
                                </p>

                                <p  className="text">
                                    <textarea placeholder="How may i help you?" ref="text" onChange={this.updateText} value={this.state.text}  name="text" className={"validate[required,length[6,300]] feedback-input " + this.state.textValid} id="comment" ></textarea>
                                </p>


                                <div onClick={this.onSubmit} className="submit">
                                    <input type="submit" value="" id="button-blue"/>
                                    <div className="ease"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    updateName(e) {
        this.setState({ name: e.target.value });
    }

    updateEmail(e) {
        this.setState({ email: e.target.value });
        if(validator.isEmail(this.state.email)) {
            $("#button-blue").css('background-color', "green")
        } else {
            $("#button-blue").css('background-color', "firebrick")
        }
    }
    updateText(e) {
        this.setState({ text: e.target.value });

    }

    onSubmit(e) {
        e.preventDefault()

        let email = {
            name: this.state.name,
            email: this.state.email,
            text: this.state.text
        }


        if(validator.isEmail(this.state.email)) {
            this.setState({ text: " " });
            this.setState({ name: " " });
            this.setState({ email: " " });
            $("#form-div").css("overflow", "hidden")
            $("#form-div").css("background-color", "green")
            $("#form-div").animate({height: "196px"})
            this.setState({heading: "Message Sent."})
            Meteor.call('email', email);
        } else {
            alert("INVALID EMAIL!")
        }
        
    }
}

export default Form;