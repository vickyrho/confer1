angular.module('ConferenceApp').controller('conferenceController',conferenceController);

conferenceController.$inject=['$scope','$http','$state','conferenceService'];

function conferenceController ($scope,$http,$state,conferenceService){

    var conCtrl = this ;

    conCtrl.conDetails = {};

    conCtrl.createConference = function(conDetails){

        var newData = {
            name : conCtrl.conDetails.name ,
            venue : conCtrl.conDetails.venue,
            date : conCtrl.conDetails.date,
            topic: conCtrl.conDetails.topic


        };

        console.log(conDetails);
        console.log(newData);
        console.log('hello from con controller');

        //     $http.post('http://localhost:8000/api/users', newData).

        conferenceService.addNewConference(newData).then(function(data){
            console.log(data);
        });

        $state.go('login');
        console.log("data base updated");


    }
}


