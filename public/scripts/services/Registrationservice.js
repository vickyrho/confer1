/**
 * Created by zeus on 9/30/17.
 */

angular.module('ConferenceApp')
    .factory("RegistrationService",RegistrationService);

RegistrationService.$inject= ['$http'];

function RegistrationService($http){

    var service = {};
    service.register = register;
    return service ;

    function register(params){
        return $http.post("http://localhost:8000/api/users",params).then(function(data,err){
            return (data)
        },function(err){
            return err;
        });
    }
}