var server_port = process.env.8080 || process.env.PORT || 80;
var server_host = process.env.192 || '0.0.0.0';
server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});