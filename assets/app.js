angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","UserSvc","$location",function(n,t,e){n.$on("login",function(t,e){n.currentUser=e}),n.logout=function(){t.logout(),delete n.currentUser,e.path("/login")}}]),angular.module("app").controller("ChildCtrl",["$scope","UserSvc","$location",function(t,r,a){t.addChild=function(t,e,n,o,l){r.addChild(t,e,n,o,l).then(function(t){a.path("/user-account")})}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","$location",function(n,o,l){n.login=function(t,e){o.login(t,e).then(function(t){n.$emit("login",t.data),l.path("/user-account")})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(e,t){e.addPost=function(){e.postBody&&(console.log(e.postBody),t.create({body:e.postBody}).success(function(t){e.posts.unshift(t),e.postBody=null}))},t.fetch().success(function(t){e.posts=t})}]),angular.module("app").service("PostsSvc",["$http",function(e){this.fetch=function(){return e.get("/api/posts")},this.create=function(t){return e.post("/api/posts",t)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc","$location",function(c,i,p){c.register=function(t,e,n,o,l,r,a,s,u){i.register(t,e,n,o,l,r,a,s,u).then(function(t){c.$emit("login",t.data),p.path("/user-account")})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{templateUrl:"index.html"}).when("/classes",{templateUrl:"classes.html"}).when("/about",{templateUrl:"about.html"}).when("/faq",{templateUrl:"faq.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login-form.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"registration-form.html"}).when("/user-account",{controller:"UserCtrl",templateUrl:"user-account.html"}).when("/update-user-account",{controller:"UpdateCtrl",templateUrl:"update-user-account.html"}).when("/add-child",{controller:"ChildCtrl",templateUrl:"add-child.html"}).when("/update-child",{controller:"UserCtrl",templateUrl:"update-child.html"}).when("/user-classes",{templateUrl:"user-classes.html"}).when("/user-photos",{templateUrl:"user-photos.html"}).when("/user-payments",{templateUrl:"user-payments.html"}).when("/user-forms",{templateUrl:"user-forms.html"}).when("/posts",{controller:"PostsCtrl",templateUrl:"posts.html"})}]),angular.module("app").controller("UpdateCtrl",["$scope","UserSvc","$location",function(t,c,i){t.update=function(t,e,n,o,l,r,a,s,u){c.update(t,e,n,o,l,r,a,s,u).then(function(t){i.path("/user-account")})}}]),angular.module("app").controller("UserCtrl",["$scope","UserSvc","$location",function(e,n,o){n.getAllChildren().then(function(t){e.children=t.data}),e.setChildToUpdate=function(t){e.currentUser.childToUpdate=t},e.updateChild=function(t){n.updateChild(t).then(function(t){o.path("/user-account")})},e.deleteChild=function(t){n.deleteChild(t).then(function(t){o.path("/user-account")})}}]),angular.module("app").service("UserSvc",["$http",function(c){var i=this;i.getUser=function(){return c.get("/api/users")},i.register=function(t,e,n,o,l,r,a,s,u){return c.post("/api/users",{email:t,password:e,firstName:n,lastName:o,streetAddress:l,city:r,state:a,zip:s,phone:u}).then(function(){return i.login(t,e)})},i.login=function(t,e){return c.post("/api/sessions",{email:t,password:e}).then(function(t){return i.token=t.data,c.defaults.headers.common["X-Auth"]=t.data,i.getUser()})},i.logout=function(){delete c.defaults.headers.common["X-Auth"]},i.update=function(t,e,n,o,l,r,a,s,u){return c.put("/api/users/update",{id:t,email:e,firstName:n,lastName:o,streetAddress:l,city:r,state:a,zip:s,phone:u})},i.updateChild=function(t){return c.put("/api/users/updateChild",t)},i.deleteChild=function(t){return c.put("/api/users/deleteChild",t)},i.addChild=function(t,e,n,o,l){return console.log(t),c.post("/api/users/addChild",{adultId:t,firstName:e,lastName:n,dob:o,notes:l})},i.getAllChildren=function(){return c.get("/api/users/getAllChildren")}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJjaGlsZC5jdHJsLmpzIiwibG9naW4uY3RybC5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiLCJyZWdpc3Rlci5jdHJsLmpzIiwicm91dGVzLmpzIiwidXBkYXRlLmN0cmwuanMiLCJ1c2VyLmN0cmwuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlVzZXJTdmMiLCIkbG9jYXRpb24iLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwibG9nb3V0IiwicGF0aCIsImFkZENoaWxkIiwiYWR1bHRJZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZG9iIiwibm90ZXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCIkZW1pdCIsImRhdGEiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJib2R5Iiwic3VjY2VzcyIsInBvc3QiLCJwb3N0cyIsInVuc2hpZnQiLCJmZXRjaCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJyZWdpc3RlciIsInN0cmVldEFkZHJlc3MiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiLCJwaG9uZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwidXBkYXRlIiwiaWQiLCJnZXRBbGxDaGlsZHJlbiIsInJlcyIsImNoaWxkcmVuIiwic2V0Q2hpbGRUb1VwZGF0ZSIsImNoaWxkIiwiY2hpbGRUb1VwZGF0ZSIsInVwZGF0ZUNoaWxkIiwiZGVsZXRlQ2hpbGQiLCJzdmMiLCJnZXRVc2VyIiwidmFsIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJwdXQiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE1BQUEsQ0FD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ZSgnYXBwJywgW1xuXHQnbmdSb3V0ZSdcbl0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgVXNlclN2YywgJGxvY2F0aW9uKSB7XG5cdCRzY29wZS4kb24oJ2xvZ2luJywgZnVuY3Rpb24oXywgdXNlcikge1xuXHRcdCRzY29wZS5jdXJyZW50VXNlciA9IHVzZXJcblx0fSlcblxuXHQkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0VXNlclN2Yy5sb2dvdXQoKVxuXHRcdGRlbGV0ZSAkc2NvcGUuY3VycmVudFVzZXJcblx0XHQkbG9jYXRpb24ucGF0aCgnL2xvZ2luJylcblx0fVxuXG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0NoaWxkQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgVXNlclN2YywgJGxvY2F0aW9uKSB7XG5cblx0JHNjb3BlLmFkZENoaWxkID0gZnVuY3Rpb24gKGFkdWx0SWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGRvYiwgbm90ZXMpIHtcblx0XHRVc2VyU3ZjLmFkZENoaWxkKGFkdWx0SWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGRvYiwgbm90ZXMpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQkbG9jYXRpb24ucGF0aCgnL3VzZXItYWNjb3VudCcpXG5cdFx0fSlcblx0fVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuXHQkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkKSB7XG5cdFx0VXNlclN2Yy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFBvc3RzU3ZjKSB7XG5cblx0JHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRjb25zb2xlLmxvZygkc2NvcGUucG9zdEJvZHkpXG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHRib2R5OiAkc2NvcGUucG9zdEJvZHlcblx0XHRcdH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0JHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcblx0XHRcdFx0JHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0XG5cdFBvc3RzU3ZjLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbiAocG9zdHMpIHtcblx0XHQkc2NvcGUucG9zdHMgPSBwb3N0c1xuXHR9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR0aGlzLmZldGNoID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuXHR9XG5cdHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpXG5cdH1cbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUmVnaXN0ZXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcblx0JHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpIHtcblx0XHRVc2VyU3ZjLnJlZ2lzdGVyKGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0LndoZW4oJy8nLCB7IHRlbXBsYXRlVXJsOiAnaW5kZXguaHRtbCcgfSlcblx0LndoZW4oJy9jbGFzc2VzJywgeyB0ZW1wbGF0ZVVybDogJ2NsYXNzZXMuaHRtbCcgfSlcblx0LndoZW4oJy9hYm91dCcsIHsgdGVtcGxhdGVVcmw6ICdhYm91dC5odG1sJyB9KVxuXHQud2hlbignL2ZhcScsIHsgdGVtcGxhdGVVcmw6ICdmYXEuaHRtbCcgfSlcblxuXHQud2hlbignL2xvZ2luJywgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi1mb3JtLmh0bWwnIH0pXG5cdC53aGVuKCcvcmVnaXN0ZXInLCB7IGNvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJ3JlZ2lzdHJhdGlvbi1mb3JtLmh0bWwnIH0pXG5cdFxuXHQud2hlbignL3VzZXItYWNjb3VudCcsIHsgY29udHJvbGxlcjogJ1VzZXJDdHJsJywgdGVtcGxhdGVVcmw6ICd1c2VyLWFjY291bnQuaHRtbCcgfSlcblx0LndoZW4oJy91cGRhdGUtdXNlci1hY2NvdW50JywgeyBjb250cm9sbGVyOiAnVXBkYXRlQ3RybCcsIHRlbXBsYXRlVXJsOiAndXBkYXRlLXVzZXItYWNjb3VudC5odG1sJyB9KVxuXG5cdC53aGVuKCcvYWRkLWNoaWxkJywgeyBjb250cm9sbGVyOiAnQ2hpbGRDdHJsJywgdGVtcGxhdGVVcmw6ICdhZGQtY2hpbGQuaHRtbCcgfSlcblx0LndoZW4oJy91cGRhdGUtY2hpbGQnLCB7IGNvbnRyb2xsZXI6ICdVc2VyQ3RybCcsIHRlbXBsYXRlVXJsOiAndXBkYXRlLWNoaWxkLmh0bWwnIH0pXG5cblx0LndoZW4oJy91c2VyLWNsYXNzZXMnLCB7IHRlbXBsYXRlVXJsOiAndXNlci1jbGFzc2VzLmh0bWwnIH0pXG5cdC53aGVuKCcvdXNlci1waG90b3MnLCB7IHRlbXBsYXRlVXJsOiAndXNlci1waG90b3MuaHRtbCcgfSlcblx0LndoZW4oJy91c2VyLXBheW1lbnRzJywgeyB0ZW1wbGF0ZVVybDogJ3VzZXItcGF5bWVudHMuaHRtbCcgfSlcblx0LndoZW4oJy91c2VyLWZvcm1zJywgeyB0ZW1wbGF0ZVVybDogJ3VzZXItZm9ybXMuaHRtbCcgfSlcblx0XG5cdC8vIEZyb20gc3RhcnRpbmcgZXhhbXBsZS4gQ2FuIGJlIGRlbGV0ZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBkb25lXG5cdC53aGVuKCcvcG9zdHMnLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnIH0pXG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1VwZGF0ZUN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuXHQkc2NvcGUudXBkYXRlID0gZnVuY3Rpb24gKGlkLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpIHtcblx0XHRVc2VyU3ZjLnVwZGF0ZShpZCwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHN0cmVldEFkZHJlc3MsIGNpdHksIHN0YXRlLCB6aXAsIHBob25lKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0JGxvY2F0aW9uLnBhdGgoJy91c2VyLWFjY291bnQnKVxuXHRcdH0pXG5cdH1cbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignVXNlckN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuXG5cdFVzZXJTdmMuZ2V0QWxsQ2hpbGRyZW4oKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdCRzY29wZS5jaGlsZHJlbiA9IHJlcy5kYXRhXG5cdH0pXG5cblx0JHNjb3BlLnNldENoaWxkVG9VcGRhdGUgPSBmdW5jdGlvbihjaGlsZCkge1xuXHRcdCRzY29wZS5jdXJyZW50VXNlci5jaGlsZFRvVXBkYXRlID0gY2hpbGRcblx0fVxuXG5cdCRzY29wZS51cGRhdGVDaGlsZCA9IGZ1bmN0aW9uKGNoaWxkKSB7XG5cdFx0VXNlclN2Yy51cGRhdGVDaGlsZChjaGlsZClcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG5cblx0JHNjb3BlLmRlbGV0ZUNoaWxkID0gZnVuY3Rpb24oY2hpbGQpIHtcblx0XHRVc2VyU3ZjLmRlbGV0ZUNoaWxkKGNoaWxkKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0JGxvY2F0aW9uLnBhdGgoJy91c2VyLWFjY291bnQnKVxuXHRcdH0pXG5cdH1cblxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHZhciBzdmMgPSB0aGlzXG5cblx0c3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VycycpXG5cdH1cblxuXHRzdmMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBzdHJlZXRBZGRyZXNzLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywge1xuXHRcdFx0ZW1haWw6IGVtYWlsLFxuXHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkLFxuXHRcdFx0Zmlyc3ROYW1lOiBmaXJzdE5hbWUsXG5cdFx0XHRsYXN0TmFtZTogbGFzdE5hbWUsXG5cdFx0XHRzdHJlZXRBZGRyZXNzOiBzdHJlZXRBZGRyZXNzLFxuXHRcdFx0Y2l0eTogY2l0eSxcblx0XHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRcdHppcDogemlwLFxuXHRcdFx0cGhvbmU6IHBob25lXG5cdFx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gc3ZjLmxvZ2luKGVtYWlsLCBwYXNzd29yZClcblx0XHR9KVxuXHR9XG5cblx0c3ZjLmxvZ2luID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xuXHRcdFx0ZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmRcblx0XHR9KS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHN2Yy50b2tlbiA9IHZhbC5kYXRhXG5cdFx0XHQkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1BdXRoJ10gPSB2YWwuZGF0YVxuXHRcdFx0cmV0dXJuIHN2Yy5nZXRVc2VyKClcblx0XHR9KVxuXHR9XG5cblx0c3ZjLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuXHRcdGRlbGV0ZSAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1BdXRoJ11cblx0fVxuXG5cdHN2Yy51cGRhdGUgPSBmdW5jdGlvbiAoaWQsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBzdHJlZXRBZGRyZXNzLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSkge1xuXHRcdHJldHVybiAkaHR0cC5wdXQoJy9hcGkvdXNlcnMvdXBkYXRlJywge1xuXHRcdFx0aWQ6IGlkLFxuXHRcdFx0ZW1haWw6IGVtYWlsLFxuXHRcdFx0Zmlyc3ROYW1lOiBmaXJzdE5hbWUsXG5cdFx0XHRsYXN0TmFtZTogbGFzdE5hbWUsXG5cdFx0XHRzdHJlZXRBZGRyZXNzOiBzdHJlZXRBZGRyZXNzLFxuXHRcdFx0Y2l0eTogY2l0eSxcblx0XHRcdHN0YXRlOiBzdGF0ZSxcblx0XHRcdHppcDogemlwLFxuXHRcdFx0cGhvbmU6IHBob25lXG5cdFx0fSlcblx0fVxuXG5cdHN2Yy51cGRhdGVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdHJldHVybiAkaHR0cC5wdXQoJy9hcGkvdXNlcnMvdXBkYXRlQ2hpbGQnLCBjaGlsZClcblx0fVxuXG5cdHN2Yy5kZWxldGVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuXHRcdHJldHVybiAkaHR0cC5wdXQoJy9hcGkvdXNlcnMvZGVsZXRlQ2hpbGQnLCBjaGlsZClcblx0fVxuXG5cdHN2Yy5hZGRDaGlsZCA9IGZ1bmN0aW9uIChhZHVsdElkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBkb2IsIG5vdGVzKSB7XG5cdFx0Y29uc29sZS5sb2coYWR1bHRJZClcblxuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzL2FkZENoaWxkJywge1xuXHRcdFx0YWR1bHRJZDogYWR1bHRJZCxcblx0XHRcdGZpcnN0TmFtZTogZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGxhc3ROYW1lLFxuXHRcdFx0ZG9iOiBkb2IsXG5cdFx0XHRub3Rlczogbm90ZXNcblx0XHR9KVxuXHR9XG5cblx0c3ZjLmdldEFsbENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMvZ2V0QWxsQ2hpbGRyZW4nKVxuXHR9XG5cbn0pIl19
