
'use strict';

module.exports = function(app) {
  var hitachi = require('../controllers/hitachi');
  
  app.route('/hitachi/generateAddress')
    .get(hitachi.get_wallet);
  
    app.route('/hitachi/getBalance')
    .get(hitachi.get_balance);
  
    app.route('/hitachi/deposits')
    .get(hitachi.get_deposits);   

    app.route('/hitachi/transfer')
    .post(hitachi.transfer);
    
    app.route('/hitachi/withdraw')
    .post(hitachi.withdraw);
  
};



