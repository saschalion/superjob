define(['jquery', 'validate', 'generateContactNumbers', 'validation', 'tabs'],
    function($, validate, generateContactNumbers, validation, tabs) {
        function popupInit() {
            $('.js-popup-link').click(function(e) {
                var $this = $(this);

                $.ajax({
                    url: '/inc/registration.htm?ver=' + new Date(),
                    success: function(data) {
                        $('.js-popup-inner').html($(data));
                        $('.js-popup').fadeIn();
                        $('.js-page').addClass('_type_with-popup');
                        $('.js-hidden-field').val($this.data('id'));

                        $.each($('.js-form'), function() {
                            validate($(this).closest('.js-registration-box').index() + 1, $(this));
                        });

                        $.each($('.js-contacts-stretch'), function() {
                            $(this).html(generateContactNumbers());
                        });

                        validation();
                        tabs();
                    }
                });

                e.preventDefault();
            });
        }

        popupInit();
    });