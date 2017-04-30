(function () {
    (function(){
        angular.module('app')
            .directive('navContent',function ()  {
                return {
                    link:link
                }
            });
        function link(scope, ele, attr){
            var contentList = {
                '用户信息':0,
                '网络信息':1,
                '设备信息':2,
                '可操作硬件':3
            };
            var activeIndex=0;
            isShow();
            scope.$on('activeName', function (event,data) {
                activeIndex = contentList[data.tabName];
                isShow();
            });
            function isShow(){
                $(ele).children().not(activeIndex).hide();
                $(ele).children().eq(activeIndex).show();
            }

        }
    })();

})();
