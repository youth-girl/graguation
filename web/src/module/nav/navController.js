(function(){
    angular.module('app.nav',[])
        .controller('NavController',NavController);

    NavController.$inject = ['$scope'];

    function NavController($scope){
        var vm = this;
        vm.navList = [
            {
                'tabName':'用户信息',
                'tabActive':true
            },
            {
                'tabName':'网络信息',
                'tabActive':false
            },
            {
                'tabName':'设备信息',
                'tabActive':false
            },
            {
                'tabName':'可操作硬件',
                'tabActive':false
            }
        ];
        vm.activeTab = activeTab;
        /*///////////////////////////////////*/
        function activeTab($index){
            clearTabActive();
            vm.navList[$index].tabActive = true;
            $scope.$emit('activeName',vm.navList[$index]);
        }
        function clearTabActive(){
            for(var i=0; i<vm.navList.length; i++){
                vm.navList[i].tabActive = false;
            }
        }
    }
})();
