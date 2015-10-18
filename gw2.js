angular.module('gw2', []).

    controller('LangCtrl', function ($scope) {
        $scope.langs = {
            de: 'Deutsch',
            en: 'English',
            es: 'Español',
            fr: 'Français'
        };
        $scope.lang = localStorage.getItem("language") || 'en';

        $scope.persist = function() {
            localStorage.setItem("language", $scope.lang);
        };
    });
