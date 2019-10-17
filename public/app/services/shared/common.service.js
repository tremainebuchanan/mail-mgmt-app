angular.module('common-services',[]).service('commonService', commonService);
commonService.$inject = [];

function commonService(){
    const service = {
        toggleModal,
    };
    /**
     * Toogles a modal given an id
     * @param {string} modalId - The unique id of a modal
     */
    function toggleModal( modalId ){
        document.getElementById(modalId).classList.toggle('is-active');
    }

    return service;
}