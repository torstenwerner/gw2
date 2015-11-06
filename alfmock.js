angular.module('alfmock', ['ngStorage']).

controller('AlfCtrl', function ($sessionStorage, $timeout) {
    var vm = this;

    vm.storage = $sessionStorage.$default({
        person: {}
    });

    vm.loading = false;

    vm.submit = function () {
        vm.loading = true;
        $timeout(1000).then(function () {
            vm.loading = false;
            vm.storage.person = {
                firstName: 'Torsten',
                lastName: 'Werner',
                email: 'torsten.werner@voellig.egal',
                signedIn: true
            };
        });
    };

    vm.logout = function () {
        vm.loading = true;
        $timeout(1000).then(function() {
            vm.loading = false;
            vm.logoutmsg = 'Sie wurden erfolgreich abgemeldet.';
            vm.storage.person = {};
        });
    }
});
