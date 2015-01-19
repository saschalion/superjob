define(['jquery'],
    function($) {
        return function steps(step) {
            var $stepOne = $('.js-step-one');
            var $stepTwo = $('.js-step-two');
            var $tabsLine = $('.js-tabs-line');

            if( step == 1 ) {
                $stepOne.fadeIn();
                $stepTwo.hide();
                $tabsLine.css('top', 0);
            } else {
                $stepOne.hide();
                $stepTwo.fadeIn();
                $tabsLine.css('top', 29);

                $stepTwo.find('.js-tabs-item').first().addClass('_state_clickable');
            }
        }
    });