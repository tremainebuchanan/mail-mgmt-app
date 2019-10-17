angular.module('login', []).component('login', {
    templateUrl: 'app/modules/login/login.html',
    controller: LoginController
});

function LoginController($scope) {
    $scope.user = {
        email: '',
        password: ''
    }
    
    activate();

    function activate(){
        console.log('activate')
    }
};

