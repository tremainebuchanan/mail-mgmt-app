angular.module('mail.create', []).component('mailCreate', {
    templateUrl: 'app/modules/mail/mail-create.html',
    controller: MailCreateController
});

function MailCreateController($scope) {
    activate();

    function activate() {
        console.log('activated create')
    }
}