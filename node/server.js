var http = requiere('http').Server();
var io = requiere('socket.io')(http);
var redis = require('redis');

var redisClient = redis.createClient(6379, 'redis');
