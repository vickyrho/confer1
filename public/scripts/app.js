

var states = [
    {
        name:'login',
        state:{
            url:'/login',
            templateUrl:'../views/pages/login.html',
            data:{
                text:"register",
                visible:"true"
            }
        }
    },
    {
        name:'register',
        state:{
            url:'/register',
            templateUrl:'../views/pages/register.html',
            data:{
                text:"Login",
                visible:"true"
            }
        }
    },
    {
        name:'home',
        state:{
            url:'/',
            templateUrl:'../views/pages/home.html',
            data:{
                text:"Login",
                visible:"true"
            }
        }
    },
    {
        name:'logo',
        state:{
            url:'/logo',
            templateUrl:'../views/pages/logo.html',
            data:{
                text:"Logo",
                visible:"true"
            }
        }
    },
    {
        name:'conflist',
        state:{
            url:'/conflist',
            templateUrl:'../views/pages/conflist.html',
            data:{
                text:"conflist",
                visible:"true"
            }
        }
    },
    {
        name:'AddConference',
        state:{
            url:'/AddConference',
            templateUrl:'../views/pages/AddConference.html',
            data:{
                text:"conference",
                visible:"true"
            }
        }
    }

];

var app = angular.module('ConferenceApp',['ui.router'])

    .config(function($stateProvider,$urlRouterProvider,$locationProvider){
        $urlRouterProvider.otherwise('/');

        angular.forEach(states,function(state){
            console.log('state start');
            $stateProvider.state(state.name,state.state);
        });

        $locationProvider.html5Mode(true);
    });