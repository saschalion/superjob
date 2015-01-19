define(['jquery', 'steps'],
    function($, steps) {
        return function () {
            $('.js-tabs-link').click(function() {
                var $this = $(this);

                if( $this.parent().hasClass('_state_clickable') ) {
                    steps( $this.parent().index() + 1 );
                }
            });
        }
    });