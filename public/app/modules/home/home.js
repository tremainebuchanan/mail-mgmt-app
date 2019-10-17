angular.module('home', []).component('home', {
    templateUrl: 'app/modules/home/home.html',
    controller: HomeController
});

function HomeController($scope){
    activate();

    function activate(){
        console.log('activated')
    }
}