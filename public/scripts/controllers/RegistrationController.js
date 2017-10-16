angular.module('ConferenceApp').controller('RegistrationController',RegistrationController);

RegistrationController.$inject=['$scope','$http','$state','RegistrationService'];

function RegistrationController ($scope,$http,$state,RegistrationService){

    var Regctrl = this ;

    Regctrl.regDetails = {};

    Regctrl.Register = function(regDetails){

        var newData = {
            name : Regctrl.regDetails.name ,
            username : Regctrl.regDetails.username,
            password : Regctrl.regDetails.password,
            email: Regctrl.regDetails.email,
            role: "user"


        };

        console.log(regDetails);
        console.log(newData);
        console.log('hello from reg controller');

        //     $http.post('http://localhost:8000/api/users', newData).

        RegistrationService.register(newData).then(function(data){
            console.log(data);
        });

        $state.go('login',{
            url:'/logo',
                templateUrl:'../views/pages/logo.html',
                data:{
                text:"Logo",
                    visible:"true"
            }
        });

        console.log("data base updated");


    }
}


