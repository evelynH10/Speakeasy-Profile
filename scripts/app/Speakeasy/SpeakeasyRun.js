(function () {
    'use strict';
    angular
        .module('speakeasy')
        .run(changeTitle);

    changeTitle.$inject = ['$rootScope', '$state'];

    function changeTitle($rootScope, $state) {
        $rootScope.$on('$stateChangeSuccess', newTitle);

        function newTitle() {
            document.title = $state.current.title;
        }
    }
})();