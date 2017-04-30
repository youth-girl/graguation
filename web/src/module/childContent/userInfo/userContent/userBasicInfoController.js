(function () {
    angular.module('app.userInfo')
        .controller('UserBasicInfoController',UserBasicInfoController);

    UserBasicInfoController.$inject = ['$scope'];

    function UserBasicInfoController($scope) {
        var vm = this;
        vm.userName = "街角祝福";
        vm.status = "在线";
    }

})();

