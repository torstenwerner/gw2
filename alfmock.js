angular.module('alfmock', ['ngStorage', 'pdf']).

controller('AlfCtrl', function ($sessionStorage, $timeout) {
    var vm = this;

    vm.storage = $sessionStorage.$default({
        person: {}
    });

    vm.loading = false;

    vm.loadpdf = true;

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
                return $q.reject('error')
            }
        }).then(function () {
            vm.loadpdf = true;
            return $timeout(1000);
        }).then(function () {
            vm.loadpdf = false;
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
}).

controller('PdfController', function (pdfDelegate) {
    var vm = this;

    vm.getCurrentPage = function() {
        return pdfDelegate.$getByHandle('preview').getCurrentPage();
    };

    vm.getPageCount = function() {
        return pdfDelegate.$getByHandle('preview').getPageCount();
    };

    vm.prev = function() {
        pdfDelegate.$getByHandle('preview').prev();
    };

    vm.next = function() {
        pdfDelegate.$getByHandle('preview').next();
    };

    vm.zoomIn = function() {
        pdfDelegate.$getByHandle('preview').zoomIn();
    };

    vm.zoomOut = function() {
        pdfDelegate.$getByHandle('preview').zoomOut();
    };
});