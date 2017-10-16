angular.module('ConferenceApp').controller('LoginController',LoginController);

LoginController.$inject = ['$scope','$http','$state'];

function LoginController($scope,$http,$state){

    var logCtrl =this;
    logCtrl.loggedin = false;
    logCtrl.logDetails = {};
    var valid ;
    logCtrl.userLoggedIn = false ;

    logCtrl.login = function(logDetails) {


        var str1 = "user";
        var str2 = "admin";
        var newData = {
            username : logCtrl.logDetails.username,
            password : logCtrl.logDetails.password,
            role : logCtrl.logDetails.role
        };

        console.log(newData);
        console.log(logDetails);

        $http.post("http://localhost:8000/api/authenticate",newData).then(function(data){

            console.log(data);
            console.log(data.data.success);
            console.log(data.data.message);
            console.log(data.data.flag);

            if(!Math.abs(str1.localeCompare(data.data.flag))){
                console.log("user Auth");
                $state.go('conflist');
                //             userLoggedIn = true ;
            }else if(!Math.abs(str2.localeCompare(data.data.flag)))
            {
                console.log("Admin Auth");
                $state.go('AddConference');
            }



        });

        console.log("User loggged in succesfully");

    };
}