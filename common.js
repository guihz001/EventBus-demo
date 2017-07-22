(function (angular) {
    'use strict';
    angular
        .module("ComApp", [])
        .factory("Observer", function () {
            var eventMap = {};
            var publicMsg = {
                on: function (eventName, eventHandle) {
                    if (!eventMap[eventName]) {
                        eventMap[eventName] = [];
                    }
                    eventMap[eventName].push(eventHandle);
                },
                off: function (eventName, eventHandle) {
                    for (var i = 0; i < eventMap[eventName].length; i++) {
                        if (eventMap[eventName][i] === eventHandle) {
                            eventMap[eventName].splice(i, 1);
                            break;
                        }

                    }
                },
                fire: function (event) {
                    var eventName = event.type;
                    if (eventMap && eventMap[eventName]) {
                       for(var i=0; i<eventMap[eventName].length;i++){
                            eventMap[eventName][i](event);
                       }
                    }
                }
            };
            return publicMsg;
        })
})(angular)