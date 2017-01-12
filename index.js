var Hapi = require(‘hapi’);
var server = new Hapi.Server();
server.connection({ port: 80 });
 
server.start(function (err) {
  // Server running on port 80
});