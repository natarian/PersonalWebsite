var app = angular.module("myApp", []);

app.directive("navbar", function() {
    return {
        restrict : "E",
        templateUrl : 'app/navbar.html'
    };
});
