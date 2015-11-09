angular.module('alfmock', ['ngStorage']).

controller('AlfCtrl', function ($sessionStorage, $timeout) {
    var vm = this;

    vm.storage = $sessionStorage.$default({
        person: {}
    });

    vm.loading = false;

    vm.submit = function () {
        vm.loading = true;
        delete vm.logoutmsg;
        delete vm.errormsg;
        $timeout(1000).then(function () {
            vm.loading = false;
            if (vm.storage.person.userName == 'test' && vm.storage.person.password == 'test') {
                vm.storage.person = {
                    firstName: 'Torsten',
                    lastName: 'Werner',
                    email: 'torsten.werner@voellig.egal',
                    signedIn: true
                };
            } else {
                delete vm.storage.person.password;
                vm.errormsg = true;
            }
        });
    };

    vm.logout = function () {
        vm.loading = true;
        $timeout(1000).then(function () {
            vm.loading = false;
            vm.logoutmsg = true;
            vm.storage.person = {};
        });
    }
});
