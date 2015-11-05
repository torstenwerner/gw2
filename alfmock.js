angular.module('alfmock', ['ngStorage']).

controller('AlfCtrl', function ($sessionStorage) {
    var vm = this;

    vm.storage = $sessionStorage.$default({
        person: {}
    });

    vm.submit = function() {
        vm.storage.person = {
            firstName: 'Torsten',
            lastName: 'Werner',
            email: 'torsten.werner@voellig.egal',
            signedIn: true
        };
    };

    vm.logout = function () {
        vm.logoutmsg = 'Sie wurden erfolgreich abgemeldet.';
        vm.storage.person = {};
    }
});
