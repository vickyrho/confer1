/**
 * Created by zeus on 9/30/17.
 */

angular.module('ConferenceApp')
    .factory("conferenceService",conferenceService);

conferenceService.$inject= ['$http'];

function conferenceService($http){

    var service = {};
    service.addNewConference = addNewConference;
    return service ;

    function addNewConference(params){
        return $http.post("http://localhost:8000/confo/conferences",params)
    }
}