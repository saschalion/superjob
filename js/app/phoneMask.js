define(['jquery', 'inputmask'],
    function($) {
        return function phoneMask() {
            $('.js-phone').inputmask('mask', {"mask": "+7 (999) 999-9999"});
        }
    });