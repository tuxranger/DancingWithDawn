angular.module('app')
    .service('ClassSVC', function ($http) {
        var svc = this

        // svc.getAdmin = function () {
        //     return $http.get('/api/classes')
        // }

        svc.addClass = function (title, description, time, days, album) {
            return $http.post('/api/classes/addClass', {
                title: title,
                description: description,
                time: time,
                days: days,
                album: album
            })
        }

        svc.updateClass = function (title, description, time, days, album) {
            return $http.put('/api/classes/update', {
                title: title,
                description: description,
                time: time,
                days: days,
                album: album
            })
        }

        svc.deleteClass = function (child) {
            return $http.put('/api/classes/deleteClass', child)
        }

        svc.getAllClasses = function () {
            return $http.get('/api/classes/getAllClasses')
        }

    })