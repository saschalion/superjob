define([],
    function() {
        return function () {
            var numbers = '';

            for(var j = 1; j < 127; ) {
                var number = Math.floor(Math.random() * 10) + 1;
                numbers += '<span style="left: ' + j + 'px;" class="b-contacts-num">' + number + '</span>';

                j += 3;
            }

            return numbers;
        }
    });