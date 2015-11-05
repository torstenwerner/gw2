angular.module('alfmock', []).

controller('AlfCtrl', function () {
    var vm = this;

    vm.person = {};

    vm.submit = function () {
        vm.person = {
            firstName: 'Torsten',
            lastName: 'Werner',
            email: 'torsten.werner@voellig.egal',
            userName: vm.person.userName,
            signedIn: true
        }
    };

    vm.logout = function () {
        vm.logoutmsg = 'Sie wurden erfolgreich abgemeldet.';
        vm.person = {};
    }
});
