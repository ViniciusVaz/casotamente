var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: 5050 });
 
server.start(function (err) {
    console.log("Hello World!")
  // Server running on port 5050
});