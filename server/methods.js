import { Meteor } from 'meteor/meteor';
import nodemailer from 'nodemailer'
import React from 'react'
var transporter = nodemailer.createTransport('smtps://joelce23%40gmail.com:7760201Jj@smtp.gmail.com');


Meteor.methods({
    'email'(data) {

// create reusable transporter object using the default SMTP transport
console.log(data)
// setup e-mail data with unicode symbols
var mailOptions = {
    from:  data.name + "👥" + "<" + data.email +">", // sender address
    to: 'joelcedano@live.com', // list of receivers
    subject: "New Message from " + data.name, // Subject line
    text: data.text, // plaintext body
    html: data.text // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
    }
})