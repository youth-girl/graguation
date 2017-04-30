(function () {
    (function(){
        angular.module('app')
            .directive('userContent',function ()  {
                return {
                    link:link
                }
            });
        function link(scope, ele){
            var contentList = {
                '基本信息':0,
                '密码修改':1
            };
            var activeIndex=0;
            isShow();
            scope.$on('userInfoActive', function (event,data) {
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
