angular.module('alfresco', []).

    controller('AlfCtrl', function ($http) {
        var vm = this;

        vm.messages = function() {
            return angular.toJson(vm, true);
        };

        vm.submit = function() {
            var data = { username: vm.username, password: vm.password };
            $http.post('http://bnotk-e-akte-nb.westernacher.com:8080/alfresco/s/api/login', data).
                then(function (response) {
                    vm.ticket = response.data.data.ticket;
                    delete vm.logoutmsg;
                    return $http.get('http://bnotk-e-akte-nb.westernacher.com:8080/alfresco/s/api/people/' + vm.username +
                        '?alf_ticket=' + vm.ticket);
                }).
                then(function(response) {
                    vm.person = response.data;
                });
        }

        vm.logout = function() {
            $http.delete('http://bnotk-e-akte-nb.westernacher.com:8080/alfresco/s/api/login/ticket/' + vm.ticket).
                then(function (response) {
                    vm.logoutmsg = 'Sie wurden erfolgreich abgemeldet.';
                    delete vm.person;
                })
        }
    });
