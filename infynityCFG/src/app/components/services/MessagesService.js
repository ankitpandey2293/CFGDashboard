(function(){
  'use strict';

  angular.module('app')
        .service('messagesService', [
        '$q',
        messagesService
  ]);

  function messagesService($q){
    var messages = [
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'accessMoneyManager Wire Issue',
        userName: 'Pandey, Ankit',
        date: '1901',
        text: 'aMM Issue resolved : PIR under review .'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Wallstreet Upgrade 5.0',
        userName: 'Sivakumar, Asokan',
        date: '1945',
        text: 'WSS code drop for QA complete . Validations successfull , will move to PROD next month on 10th'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
