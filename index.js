const express = require('express'),
var app = express();
  app.set('port', (process.env.PORT || 80));   
  router = express.Router(),
   mainCtrl = require('../controllers/MainController');
  router.get('/report/:groupId/:reportId', mainCtrl.embedReport);

  app.listen(app.get('port'), function() {
   console.log("Node app is running at localhost:" + app.get('port'))
  module.exports = router;
  
});