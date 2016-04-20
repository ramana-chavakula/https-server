var https = require('https');
var fs = require('fs');
var options = {
	key: fs.readFileSync('certs/key.pem'),
	passphrase: 'password',//passphrase for key while generating if we omit here it will ask in stdio which was not working in unix
	cert: fs.readFileSync('certs/cert.pem')
};
https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello https\n");
}).listen(1766, function(){
	console.log('https server is listening on port no : 1766');
});