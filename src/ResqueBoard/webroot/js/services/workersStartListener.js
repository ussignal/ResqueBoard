angular.module("app").factory("workersStartListener",["$rootScope",function(a){"use strict";var b=new SocketListener(a,"start");return b}]);