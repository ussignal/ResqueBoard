angular.module("app").controller("jobViewController", [

    function() {
        function init()
        {
            var socket = new WebSocket("ws://"+CUBE_URL+"/1.0/event/get");

            socket.onopen = function() {
                socket.send(JSON.stringify({
                    "expression": 'process',
                    "start": formatISO(new Date(Date.now()))
                }));
            };

            socket.onmessage = function(message) {
                updateJobOutput(JSON.parse(message.data));
            };
        }

        function updateJobOutput(event) {
            $("#" + event.data.job_id  +" .output span").html(event.data.output);
        }

        init();

    }]);
