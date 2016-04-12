(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'Admin',
      email: 'contact@flatlogic.com',
      firstName: '',
      lastName: '' ,
      company: 'Citizens Financial Group' ,
      address: 'Rhode Island' ,
      city: 'Rhode' ,
      state: '' ,
      biography: 'CFG Daswhboard alpha testing phase',
      postalCode : '220007'
    };
  }

})();
