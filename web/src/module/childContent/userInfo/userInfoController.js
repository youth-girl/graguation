(function () {
    angular.module('app.userInfo',[])
        .controller('UserInfoController',UserInfoController);

    UserInfoController.$inject = ['$scope'];

    function UserInfoController($scope) {
        var vm = this;
    }

})();
