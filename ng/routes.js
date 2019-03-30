angular.module('app')
.config(function ($routeProvider) {
	$routeProvider
	.when('/', { templateUrl: 'index.html' })
	.when('/classes', { templateUrl: 'classes.html' })
	.when('/about', { templateUrl: 'about.html' })
	.when('/faq', { templateUrl: 'faq.html' })
	.when('/login', { controller: 'LoginCtrl', templateUrl: 'login-form.html' })
	.when('/register', { controller: 'RegisterCtrl', templateUrl: 'registration-form.html' })
	.when('/posts', { controller: 'PostsCtrl', templateUrl: 'posts.html' })

	.when('/user-account', { controller: 'UserCtrl', templateUrl: 'user-account.html' })
	.when('/user-classes', { templateUrl: 'user-classes.html' })
	.when('/user-photos', { templateUrl: 'user-photos.html' })
	.when('/user-payments', { templateUrl: 'user-payments.html' })
	.when('/user-forms', { templateUrl: 'user-forms.html' })

	.when('/update-user-account', { controller: 'UpdateCtrl', templateUrl: 'update-user-account.html' })
	.when('/add-child', { controller: 'ChildCtrl', templateUrl: 'add-child.html' })
})