const fs = require("fs")

fs.writeFileSync('hello-word', "HELLO node!");

console.log('HELLO WORLD:!');

const fileContent = fs.readFileSync("hello-word.js","utf8");
console.log (fileContent);


var http = require("http" );



http.createServer(function (request, response) {


    response.writeHead(200, {'Content-Type' : 'text/plain'}) ;



    response.end('Hello Node!!!') ;

}).listen(3000) ;




console.log('Server running at http://127.0.0.1:3000/') ;


function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

const newPassword = generatePassword(12); 
console.log(newPassword);


const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:  {
        Email: 'votre.email@gmail.com',
    
    }
});


const mailOptions = {
    from: 'votre.email@gmail.com',
    to: 'destinataire@example.com',
    subject: 'Sujet de l\'email',
    text: 'Contenu de l\'email'
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email envoyé: ' + info.response);
    }
});

