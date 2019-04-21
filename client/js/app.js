/* register the modules the application depends upon here*/
angular.module('clients', ['angular.chosen']);

/* register the application and inject all the necessary dependencies */
var app = angular.module('directoryApp', ['clients', 'angular.chosen']);