angular.module('app')
.config(function ($routeProvider) {
	$routeProvider
	.when('/', { templateUrl: 'index.html' })
	.when('/classes', { templateUrl: 'classes.html' })
	.when('/about', { templateUrl: 'about.html' })
	.when('/faq', { templateUrl: 'faq.html' })

	.when('/login', { controller: 'LoginCtrl', templateUrl: 'login-form.html' })
	.when('/register', { controller: 'RegisterCtrl', templateUrl: 'registration-form.html' })
	
	.when('/user-account', { controller: 'UserCtrl', templateUrl: 'user-account.html' })
	.when('/update-user-account', { controller: 'UpdateCtrl', templateUrl: 'update-user-account.html' })
	.when('/update-user-password', { controller: 'UpdateCtrl', templateUrl: 'update-user-password.html' })

	.when('/add-child', { controller: 'ChildCtrl', templateUrl: 'add-child.html' })
	.when('/update-child', { controller: 'UserCtrl', templateUrl: 'update-child.html' })

	.when('/user-classes', { templateUrl: 'user-classes.html' })
	.when('/user-photos', { templateUrl: 'user-photos.html' })
	.when('/user-payments', { templateUrl: 'user-payments.html' })
	.when('/user-forms', { templateUrl: 'user-forms.html' })
	
	// From starting example. Can be deleted after templates are done
	.when('/posts', { controller: 'PostsCtrl', templateUrl: 'posts.html' })
})