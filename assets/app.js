angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","UserSvc",function(n,t){n.$on("login",function(t,e){n.currentUser=e}),n.logout=function(){t.logout(),delete n.currentUser}}]),angular.module("app").controller("ChildCtrl",["$scope","UserSvc","$location",function(t,l,s){t.addChild=function(t,e,n,o,r){l.addChild(t,e,n,o,r).then(function(t){s.path("/user-account")})}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","$location",function(n,o,r){n.login=function(t,e){o.login(t,e).then(function(t){n.$emit("login",t.data),r.path("/user-account")})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(e,t){e.addPost=function(){e.postBody&&(console.log(e.postBody),t.create({body:e.postBody}).success(function(t){e.posts.unshift(t),e.postBody=null}))},t.fetch().success(function(t){e.posts=t})}]),angular.module("app").service("PostsSvc",["$http",function(e){this.fetch=function(){return e.get("/api/posts")},this.create=function(t){return e.post("/api/posts",t)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc","$location",function(c,i,p){c.register=function(t,e,n,o,r,l,s,a,u){i.register(t,e,n,o,r,l,s,a,u).then(function(t){c.$emit("login",t.data),p.path("/user-account")})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{templateUrl:"index.html"}).when("/classes",{templateUrl:"classes.html"}).when("/about",{templateUrl:"about.html"}).when("/faq",{templateUrl:"faq.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login-form.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"registration-form.html"}).when("/posts",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/user-account",{controller:"UserCtrl",templateUrl:"user-account.html"}).when("/user-classes",{templateUrl:"user-classes.html"}).when("/user-photos",{templateUrl:"user-photos.html"}).when("/user-payments",{templateUrl:"user-payments.html"}).when("/user-forms",{templateUrl:"user-forms.html"}).when("/update-user-account",{controller:"UpdateCtrl",templateUrl:"update-user-account.html"}).when("/add-child",{controller:"ChildCtrl",templateUrl:"add-child.html"})}]),angular.module("app").controller("UpdateCtrl",["$scope","UserSvc","$location",function(t,c,i){t.update=function(t,e,n,o,r,l,s,a,u){c.update(t,e,n,o,r,l,s,a,u).then(function(t){i.path("/user-account")})}}]),angular.module("app").controller("UserCtrl",["$scope","UserSvc",function(e,t){t.getAllChildren().then(function(t){e.testChildren=t.data})}]),angular.module("app").service("UserSvc",["$http",function(c){var i=this;i.getUser=function(){return c.get("/api/users")},i.register=function(t,e,n,o,r,l,s,a,u){return c.post("/api/users",{email:t,password:e,firstName:n,lastName:o,streetAddress:r,city:l,state:s,zip:a,phone:u}).then(function(){return i.login(t,e)})},i.login=function(t,e){return c.post("/api/sessions",{email:t,password:e}).then(function(t){return i.token=t.data,c.defaults.headers.common["X-Auth"]=t.data,i.getUser()})},i.logout=function(){delete c.defaults.headers.common["X-Auth"]},i.update=function(t,e,n,o,r,l,s,a,u){return c.put("/api/users/update",{id:t,email:e,firstName:n,lastName:o,streetAddress:r,city:l,state:s,zip:a,phone:u})},i.addChild=function(t,e,n,o,r){return console.log(t),c.post("/api/users/addChild",{adultId:t,firstName:e,lastName:n,dob:o,notes:r})},i.getAllChildren=function(){return c.get("/api/users/getAllChildren")}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJjaGlsZC5jdHJsLmpzIiwibG9naW4uY3RybC5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiLCJyZWdpc3Rlci5jdHJsLmpzIiwicm91dGVzLmpzIiwidXBkYXRlLmN0cmwuanMiLCJ1c2VyLmN0cmwuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlVzZXJTdmMiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwibG9nb3V0IiwiJGxvY2F0aW9uIiwiYWRkQ2hpbGQiLCJhZHVsdElkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkb2IiLCJub3RlcyIsInRoZW4iLCJyZXNwb25zZSIsInBhdGgiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCIkZW1pdCIsImRhdGEiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJib2R5Iiwic3VjY2VzcyIsInBvc3QiLCJwb3N0cyIsInVuc2hpZnQiLCJmZXRjaCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJyZWdpc3RlciIsInN0cmVldEFkZHJlc3MiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiLCJwaG9uZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwidXBkYXRlIiwiaWQiLCJnZXRBbGxDaGlsZHJlbiIsInJlcyIsInRlc3RDaGlsZHJlbiIsInN2YyIsImdldFVzZXIiLCJ2YWwiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInB1dCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsTUFBQSxDQUNBLFlDREFELFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxrQkFBQSxDQUFBLFNBQUEsVUFBQSxTQUFBQyxFQUFBQyxHQUNBRCxFQUFBRSxJQUFBLFFBQUEsU0FBQUMsRUFBQUMsR0FDQUosRUFBQUssWUFBQUQsSUFHQUosRUFBQU0sT0FBQSxXQUNBTCxFQUFBSyxnQkFDQU4sRUFBQUssZ0JDUkFSLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxZQUFBLENBQUEsU0FBQSxVQUFBLFlBQUEsU0FBQUMsRUFBQUMsRUFBQU0sR0FFQVAsRUFBQVEsU0FBQSxTQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQUNBWixFQUFBTyxTQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQUNBQyxLQUFBLFNBQUFDLEdBQ0FSLEVBQUFTLEtBQUEsdUJDTkFuQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsWUFBQSxDQUFBLFNBQUEsVUFBQSxZQUFBLFNBQUFDLEVBQUFDLEVBQUFNLEdBQ0FQLEVBQUFpQixNQUFBLFNBQUFDLEVBQUFDLEdBQ0FsQixFQUFBZ0IsTUFBQUMsRUFBQUMsR0FDQUwsS0FBQSxTQUFBQyxHQUNBZixFQUFBb0IsTUFBQSxRQUFBTCxFQUFBTSxNQUNBZCxFQUFBUyxLQUFBLHVCQ05BbkIsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLFlBQUEsQ0FBQSxTQUFBLFdBQUEsU0FBQUMsRUFBQXNCLEdBRUF0QixFQUFBdUIsUUFBQSxXQUNBdkIsRUFBQXdCLFdBQ0FDLFFBQUFDLElBQUExQixFQUFBd0IsVUFDQUYsRUFBQUssT0FBQSxDQUNBQyxLQUFBNUIsRUFBQXdCLFdBQ0FLLFFBQUEsU0FBQUMsR0FDQTlCLEVBQUErQixNQUFBQyxRQUFBRixHQUNBOUIsRUFBQXdCLFNBQUEsU0FLQUYsRUFBQVcsUUFBQUosUUFBQSxTQUFBRSxHQUNBL0IsRUFBQStCLE1BQUFBLE9DaEJBbEMsUUFBQUMsT0FBQSxPQUNBb0MsUUFBQSxXQUFBLENBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBSCxNQUFBLFdBQ0EsT0FBQUUsRUFBQUUsSUFBQSxlQUVBRCxLQUFBVCxPQUFBLFNBQUFHLEdBQ0EsT0FBQUssRUFBQUwsS0FBQSxhQUFBQSxPQ05BakMsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGVBQUEsQ0FBQSxTQUFBLFVBQUEsWUFBQSxTQUFBQyxFQUFBQyxFQUFBTSxHQUNBUCxFQUFBc0MsU0FBQSxTQUFBcEIsRUFBQUMsRUFBQVQsRUFBQUMsRUFBQTRCLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEdBQ0ExQyxFQUFBcUMsU0FBQXBCLEVBQUFDLEVBQUFULEVBQUFDLEVBQUE0QixFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQUNBN0IsS0FBQSxTQUFBQyxHQUNBZixFQUFBb0IsTUFBQSxRQUFBTCxFQUFBTSxNQUNBZCxFQUFBUyxLQUFBLHVCQ05BbkIsUUFBQUMsT0FBQSxPQUNBOEMsT0FBQSxDQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsSUFBQSxDQUFBQyxZQUFBLGVBQ0FELEtBQUEsV0FBQSxDQUFBQyxZQUFBLGlCQUNBRCxLQUFBLFNBQUEsQ0FBQUMsWUFBQSxlQUNBRCxLQUFBLE9BQUEsQ0FBQUMsWUFBQSxhQUNBRCxLQUFBLFNBQUEsQ0FBQS9DLFdBQUEsWUFBQWdELFlBQUEsb0JBQ0FELEtBQUEsWUFBQSxDQUFBL0MsV0FBQSxlQUFBZ0QsWUFBQSwyQkFDQUQsS0FBQSxTQUFBLENBQUEvQyxXQUFBLFlBQUFnRCxZQUFBLGVBRUFELEtBQUEsZ0JBQUEsQ0FBQS9DLFdBQUEsV0FBQWdELFlBQUEsc0JBQ0FELEtBQUEsZ0JBQUEsQ0FBQUMsWUFBQSxzQkFDQUQsS0FBQSxlQUFBLENBQUFDLFlBQUEscUJBQ0FELEtBQUEsaUJBQUEsQ0FBQUMsWUFBQSx1QkFDQUQsS0FBQSxjQUFBLENBQUFDLFlBQUEsb0JBRUFELEtBQUEsdUJBQUEsQ0FBQS9DLFdBQUEsYUFBQWdELFlBQUEsNkJBQ0FELEtBQUEsYUFBQSxDQUFBL0MsV0FBQSxZQUFBZ0QsWUFBQSxzQkNsQkFsRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxDQUFBLFNBQUEsVUFBQSxZQUFBLFNBQUFDLEVBQUFDLEVBQUFNLEdBQ0FQLEVBQUFnRCxPQUFBLFNBQUFDLEVBQUEvQixFQUFBUixFQUFBQyxFQUFBNEIsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsR0FDQTFDLEVBQUErQyxPQUFBQyxFQUFBL0IsRUFBQVIsRUFBQUMsRUFBQTRCLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEdBQ0E3QixLQUFBLFNBQUFDLEdBQ0FSLEVBQUFTLEtBQUEsdUJDTEFuQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsV0FBQSxDQUFBLFNBQUEsVUFBQSxTQUFBQyxFQUFBQyxHQUVBQSxFQUFBaUQsaUJBQUFwQyxLQUFBLFNBQUFxQyxHQUNBbkQsRUFBQW9ELGFBQUFELEVBQUE5QixVQ0pBeEIsUUFBQUMsT0FBQSxPQUNBb0MsUUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBQyxHQUNBLElBQUFrQixFQUFBakIsS0FFQWlCLEVBQUFDLFFBQUEsV0FDQSxPQUFBbkIsRUFBQUUsSUFBQSxlQUdBZ0IsRUFBQWYsU0FBQSxTQUFBcEIsRUFBQUMsRUFBQVQsRUFBQUMsRUFBQTRCLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEdBQ0EsT0FBQVIsRUFBQUwsS0FBQSxhQUFBLENBQ0FaLE1BQUFBLEVBQ0FDLFNBQUFBLEVBQ0FULFVBQUFBLEVBQ0FDLFNBQUFBLEVBQ0E0QixjQUFBQSxFQUNBQyxLQUFBQSxFQUNBQyxNQUFBQSxFQUNBQyxJQUFBQSxFQUNBQyxNQUFBQSxJQUNBN0IsS0FBQSxXQUNBLE9BQUF1QyxFQUFBcEMsTUFBQUMsRUFBQUMsTUFJQWtDLEVBQUFwQyxNQUFBLFNBQUFDLEVBQUFDLEdBQ0EsT0FBQWdCLEVBQUFMLEtBQUEsZ0JBQUEsQ0FDQVosTUFBQUEsRUFBQUMsU0FBQUEsSUFDQUwsS0FBQSxTQUFBeUMsR0FHQSxPQUZBRixFQUFBRyxNQUFBRCxFQUFBbEMsS0FDQWMsRUFBQXNCLFNBQUFDLFFBQUFDLE9BQUEsVUFBQUosRUFBQWxDLEtBQ0FnQyxFQUFBQyxhQUlBRCxFQUFBL0MsT0FBQSxrQkFDQTZCLEVBQUFzQixTQUFBQyxRQUFBQyxPQUFBLFdBR0FOLEVBQUFMLE9BQUEsU0FBQUMsRUFBQS9CLEVBQUFSLEVBQUFDLEVBQUE0QixFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQUNBLE9BQUFSLEVBQUF5QixJQUFBLG9CQUFBLENBQ0FYLEdBQUFBLEVBQ0EvQixNQUFBQSxFQUNBUixVQUFBQSxFQUNBQyxTQUFBQSxFQUNBNEIsY0FBQUEsRUFDQUMsS0FBQUEsRUFDQUMsTUFBQUEsRUFDQUMsSUFBQUEsRUFDQUMsTUFBQUEsS0FJQVUsRUFBQTdDLFNBQUEsU0FBQUMsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsR0FHQSxPQUZBWSxRQUFBQyxJQUFBakIsR0FFQTBCLEVBQUFMLEtBQUEsc0JBQUEsQ0FDQXJCLFFBQUFBLEVBQ0FDLFVBQUFBLEVBQ0FDLFNBQUFBLEVBQ0FDLElBQUFBLEVBQ0FDLE1BQUFBLEtBSUF3QyxFQUFBSCxlQUFBLFdBQ0EsT0FBQWYsRUFBQUUsSUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuXHQnbmdSb3V0ZSdcbl0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgVXNlclN2Yykge1xuXHQkc2NvcGUuJG9uKCdsb2dpbicsIGZ1bmN0aW9uKF8sIHVzZXIpIHtcblx0XHQkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyXG5cdH0pXG5cblx0JHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFVzZXJTdmMubG9nb3V0KClcblx0XHRkZWxldGUgJHNjb3BlLmN1cnJlbnRVc2VyXG5cdH1cblxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdDaGlsZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuXG5cdCRzY29wZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChhZHVsdElkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBkb2IsIG5vdGVzKSB7XG5cdFx0VXNlclN2Yy5hZGRDaGlsZChhZHVsdElkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBkb2IsIG5vdGVzKVxuXHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0JGxvY2F0aW9uLnBhdGgoJy91c2VyLWFjY291bnQnKVxuXHRcdH0pXG5cdH1cdFxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuXHQkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkKSB7XG5cdFx0VXNlclN2Yy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFBvc3RzU3ZjKSB7XG5cblx0JHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRjb25zb2xlLmxvZygkc2NvcGUucG9zdEJvZHkpXG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHRib2R5OiAkc2NvcGUucG9zdEJvZHlcblx0XHRcdH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0JHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcblx0XHRcdFx0JHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0XG5cdFBvc3RzU3ZjLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbiAocG9zdHMpIHtcblx0XHQkc2NvcGUucG9zdHMgPSBwb3N0c1xuXHR9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR0aGlzLmZldGNoID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuXHR9XG5cdHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpXG5cdH1cbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUmVnaXN0ZXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcblx0JHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpIHtcblx0XHRVc2VyU3ZjLnJlZ2lzdGVyKGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSlcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0LndoZW4oJy8nLCB7IHRlbXBsYXRlVXJsOiAnaW5kZXguaHRtbCcgfSlcblx0LndoZW4oJy9jbGFzc2VzJywgeyB0ZW1wbGF0ZVVybDogJ2NsYXNzZXMuaHRtbCcgfSlcblx0LndoZW4oJy9hYm91dCcsIHsgdGVtcGxhdGVVcmw6ICdhYm91dC5odG1sJyB9KVxuXHQud2hlbignL2ZhcScsIHsgdGVtcGxhdGVVcmw6ICdmYXEuaHRtbCcgfSlcblx0LndoZW4oJy9sb2dpbicsIHsgY29udHJvbGxlcjogJ0xvZ2luQ3RybCcsIHRlbXBsYXRlVXJsOiAnbG9naW4tZm9ybS5odG1sJyB9KVxuXHQud2hlbignL3JlZ2lzdGVyJywgeyBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJywgdGVtcGxhdGVVcmw6ICdyZWdpc3RyYXRpb24tZm9ybS5odG1sJyB9KVxuXHQud2hlbignL3Bvc3RzJywgeyBjb250cm9sbGVyOiAnUG9zdHNDdHJsJywgdGVtcGxhdGVVcmw6ICdwb3N0cy5odG1sJyB9KVxuXG5cdC53aGVuKCcvdXNlci1hY2NvdW50JywgeyBjb250cm9sbGVyOiAnVXNlckN0cmwnLCB0ZW1wbGF0ZVVybDogJ3VzZXItYWNjb3VudC5odG1sJyB9KVxuXHQud2hlbignL3VzZXItY2xhc3NlcycsIHsgdGVtcGxhdGVVcmw6ICd1c2VyLWNsYXNzZXMuaHRtbCcgfSlcblx0LndoZW4oJy91c2VyLXBob3RvcycsIHsgdGVtcGxhdGVVcmw6ICd1c2VyLXBob3Rvcy5odG1sJyB9KVxuXHQud2hlbignL3VzZXItcGF5bWVudHMnLCB7IHRlbXBsYXRlVXJsOiAndXNlci1wYXltZW50cy5odG1sJyB9KVxuXHQud2hlbignL3VzZXItZm9ybXMnLCB7IHRlbXBsYXRlVXJsOiAndXNlci1mb3Jtcy5odG1sJyB9KVxuXG5cdC53aGVuKCcvdXBkYXRlLXVzZXItYWNjb3VudCcsIHsgY29udHJvbGxlcjogJ1VwZGF0ZUN0cmwnLCB0ZW1wbGF0ZVVybDogJ3VwZGF0ZS11c2VyLWFjY291bnQuaHRtbCcgfSlcblx0LndoZW4oJy9hZGQtY2hpbGQnLCB7IGNvbnRyb2xsZXI6ICdDaGlsZEN0cmwnLCB0ZW1wbGF0ZVVybDogJ2FkZC1jaGlsZC5odG1sJyB9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdVcGRhdGVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcblx0JHNjb3BlLnVwZGF0ZSA9IGZ1bmN0aW9uIChpZCwgZW1haWwsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHN0cmVldEFkZHJlc3MsIGNpdHksIHN0YXRlLCB6aXAsIHBob25lKSB7XG5cdFx0VXNlclN2Yy51cGRhdGUoaWQsIGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBzdHJlZXRBZGRyZXNzLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSlcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCcvdXNlci1hY2NvdW50Jylcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1VzZXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU3ZjKSB7XG5cblx0VXNlclN2Yy5nZXRBbGxDaGlsZHJlbigpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0JHNjb3BlLnRlc3RDaGlsZHJlbiA9IHJlcy5kYXRhXG5cdH0pXG5cbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnVXNlclN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR2YXIgc3ZjID0gdGhpc1xuXG5cdHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKVxuXHR9XG5cblx0c3ZjLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpIHtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VycycsIHtcblx0XHRcdGVtYWlsOiBlbWFpbCxcblx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcblx0XHRcdGZpcnN0TmFtZTogZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGxhc3ROYW1lLFxuXHRcdFx0c3RyZWV0QWRkcmVzczogc3RyZWV0QWRkcmVzcyxcblx0XHRcdGNpdHk6IGNpdHksXG5cdFx0XHRzdGF0ZTogc3RhdGUsXG5cdFx0XHR6aXA6IHppcCxcblx0XHRcdHBob25lOiBwaG9uZVxuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHN2Yy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpXG5cdFx0fSlcblx0fVxuXG5cdHN2Yy5sb2dpbiA9IGZ1bmN0aW9uIChlbWFpbCwgcGFzc3dvcmQpIHtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcblx0XHRcdGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkXG5cdFx0fSkudGhlbihmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRzdmMudG9rZW4gPSB2YWwuZGF0YVxuXHRcdFx0JGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQXV0aCddID0gdmFsLmRhdGFcblx0XHRcdHJldHVybiBzdmMuZ2V0VXNlcigpXG5cdFx0fSlcblx0fVxuXG5cdHN2Yy5sb2dvdXQgPSBmdW5jdGlvbigpIHtcblx0XHRkZWxldGUgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQXV0aCddXG5cdH1cblxuXHRzdmMudXBkYXRlID0gZnVuY3Rpb24gKGlkLCBlbWFpbCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgc3RyZWV0QWRkcmVzcywgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpIHtcblx0XHRyZXR1cm4gJGh0dHAucHV0KCcvYXBpL3VzZXJzL3VwZGF0ZScsIHtcblx0XHRcdGlkOiBpZCxcblx0XHRcdGVtYWlsOiBlbWFpbCxcblx0XHRcdGZpcnN0TmFtZTogZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGxhc3ROYW1lLFxuXHRcdFx0c3RyZWV0QWRkcmVzczogc3RyZWV0QWRkcmVzcyxcblx0XHRcdGNpdHk6IGNpdHksXG5cdFx0XHRzdGF0ZTogc3RhdGUsXG5cdFx0XHR6aXA6IHppcCxcblx0XHRcdHBob25lOiBwaG9uZVxuXHRcdH0pXG5cdH1cblxuXHRzdmMuYWRkQ2hpbGQgPSBmdW5jdGlvbiAoYWR1bHRJZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZG9iLCBub3Rlcykge1xuXHRcdGNvbnNvbGUubG9nKGFkdWx0SWQpXG5cblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2Vycy9hZGRDaGlsZCcsIHtcblx0XHRcdGFkdWx0SWQ6IGFkdWx0SWQsXG5cdFx0XHRmaXJzdE5hbWU6IGZpcnN0TmFtZSxcblx0XHRcdGxhc3ROYW1lOiBsYXN0TmFtZSxcblx0XHRcdGRvYjogZG9iLFxuXHRcdFx0bm90ZXM6IG5vdGVzXG5cdFx0fSlcblx0fVxuXG5cdHN2Yy5nZXRBbGxDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzL2dldEFsbENoaWxkcmVuJylcblx0fVxuXG59KSJdfQ==
