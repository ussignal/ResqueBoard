angular.module("app").filter("uptime",function(){"use strict";return function(a){return moment().from(new Date(a),!0)}});