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

// https://wiki.guildwars2.com/wiki/API:Main
// https://api.guildwars2.com/v2/worlds?ids=all&lang=de
// https://api.guildwars2.com/v2/wvw/matches/2-1?lang=de
// https://api.guildwars2.com/v1/wvw/objective_names.json?lang=de
// https://gist.github.com/torstenwerner/2bae98192f8fbd608a85