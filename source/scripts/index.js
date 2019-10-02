//import SkyExpressEncryption from '../../private/key';
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
//setting up basics.
//console.log(enc);
var user = document.getElementById('user'),
    password = document.getElementById('password'),
    service = document.getElementById('service'),
    from = document.getElementById('from'),
    to = document.getElementById('to'),
    subject = document.getElementById('subject'),
    text = document.getElementById('text'),
    send = document.getElementById('send'),
    login = document.getElementById('login'),
    menuToggleButton = document.getElementById('menuToggleButton');

    //var skyCrypt = new SkyExpressEncryption('test', 'hello');
    //console.log(skyCrypt.RetrieveEncryptedItem());

    //send email function has been tested and worked using my personal Outlook emails. 
 SendEmail = function(){
var transporter = nodemailer.createTransport({
    service: 'outlook', //Will be using pre-selected services for now for simplicity.
    auth:{
        user: user.value, //Will pull the user's info from the userbox.
        pass: password.value //Will pull the user's info from the password box.
    }
});
//The values below will pull from their respectful boxes.
var mailOptions = {
    from: from.value, 
    to: to.value,
    subject: subject.value,
    text: text.text
};

//this method will detect if the email sends. If the email does not send
//it will print the error to the page. Once I have the HTML5 document written
//These messages will display to the user.
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else{
        console.log('Email sent: ' + info.response);
    }
});

 }

 DeployMenu = function(){
     var sideMenu = document.getElementById('sideMenu');
     let state = sideMenu.getAttribute('data-state');
    if(state === 'closed'){
        sideMenu.setAttribute('data-state', 'open');
        sideMenu.style.left = '0';
     } else {
         sideMenu.setAttribute('data-state', 'closed');
         sideMenu.style.left = '-200px';
     }
 }


 function StartEmails (){
    jsonfile.readFile(Email, function(err, obj){
        if(obj.length){
            for(var i = 0; i < obj.length; i++){
                let carrier = obj[i].carrier;
                let email = obj[i].Email;
                let password = obj[i].password;
                let el = Email.Element();
            }
        }
    })
}




//login.addEventListener('click', transporter.createTransport);
//send.addEventListener('click', SendEmail);
menuToggleButton.addEventListener('click', DeployMenu);