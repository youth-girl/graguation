(function () {
    angular.module('app.userInfo')
        .controller('UserNavController',UserNavController);
    UserNavController.$inject = ['$scope'];

    function UserNavController($scope) {
        var vm = this;
        vm.navList = [
            {
                'tabName':'基本信息',
                'tabActive':true
            },
            {
                'tabName':'密码修改',
                'tabActive':false
            }
        ];
        vm.activeTab = activeTab;
        /*///////////////////////////////////*/
        function activeTab($index){
            clearTabActive();
            vm.navList[$index].tabActive = true;
            $scope.$emit('userInfoActive',vm.navList[$index]);
        }
        function clearTabActive(){
            for(var i=0; i<vm.navList.length; i++){
                vm.navList[i].tabActive = false;
            }
        }
    }

})();
