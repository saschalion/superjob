define(['jquery', 'phoneMask'],
    function($, phoneMask) {
        return function() {
            $('body').on('click', '.js-form-btn', function(e) {
                $(this).closest('.js-registration-box').find('.js-form').submit();

                e.preventDefault();
            });

            phoneMask();
        };
    });