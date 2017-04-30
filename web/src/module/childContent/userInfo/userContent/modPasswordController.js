(function () {
    angular.module('app.userInfo')
        .controller('ModPasswordController',ModPasswordController);

    ModPasswordController.$inject = ['$scope'];

    function ModPasswordController($scope) {
        var vm = this;
        vm.userName = "街角祝福";
        vm.status = "在线";
    }

})();


