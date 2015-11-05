angular.module('alfmock', ['ngStorage']).

controller('AlfCtrl', function ($sessionStorage) {
    var vm = this;

    vm.person = $sessionStorage.$default({
        person: {}
    }).person;

    vm.submit = function() {
        vm.person = $sessionStorage.person = {
            firstName: 'Torsten',
            lastName: 'Werner',
            email: 'torsten.werner@voellig.egal',
            signedIn: true
        };
    };

    vm.logout = function () {
        vm.logoutmsg = 'Sie wurden erfolgreich abgemeldet.';
        vm.person = $sessionStorage.person = {};
    }
});
