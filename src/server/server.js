// code extended from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-08/src/server/server.js

const {app} = require('./app');

const server = require('http').Server(app);

const port = process.env.PORT || 8080;

server.listen(port, () => {
   console.log('Started server on port ' + port);
});