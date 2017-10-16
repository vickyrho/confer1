angular.module('ConferenceApp').controller('LoginController',LoginController);

LoginController.$inject = ['$scope','$http','$state'];

function LoginController($scope,$http,$state){

    var logCtrl =this;
    logCtrl.loggedin = false;
    logCtrl.logDetails = {};
    var valid ;
    logCtrl.userLoggedIn = false ;

    logCtrl.login = function(logDetails) {



        var newData = {
            username : logCtrl.logDetails.username,
            password : logCtrl.logDetails.password
        };

        console.log(newData);
        console.log(logDetails);

        $http.post("http://localhost:8000/api/authenticate",newData).then(function(data){

            console.log(data);
            console.log(data.data.success);
            console.log(data.data.message);

            if(data.data.success){
                console.log("user Auth");
                $state.go('logo',{
                    url:'/logo',
                    templateUrl:'../views/logo.html',
                    data:{
                        text:"Logo",
                        visible:"true"
                    }
                });
                //             userLoggedIn = true ;
            }else
            {
                console.log("user Fail");
            }



        });

        console.log("User loggged in succesfully");

    };
}