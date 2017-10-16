angular.module('ConferenceApp').factory("LoginService",LoginService);

LoginService.$inject=['$http'];

function LoginService($http){

    var service = {};

    service.Login = Login;

    return service;


    function Login(params) {

        return $http.post("http://localhost:8080/api/authenticate",params).then(function success(data) {

            return data;
        }          ,function error(data){
            return data;
        })
    }

}
