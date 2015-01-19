define(['jquery', 'steps'],
    function($, steps) {
        return function (step, form) {
            var isValid = false;
            var fieldErrorClass = '_state_error';
            var errorMessageClass = 'b-form__error-message';
            var disabledBtnClass = '_state_disabled';
            var $formBtn = $('.js-form-btn');
            var $registrationStep = $('.js-registration-box');

            jQuery.validator.addMethod("hiddenPhone", function(value) {
                return new RegExp(/^((8|\+7) ?)?\(?\d{3,5}\)? ?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}((-?\d{1})?-?\d{1})?$/).test(value);
            }, "Неверный формат номера телефона");

            var rules = {};

            if( step == 1) {
                rules = {
                    'first_name': {
                        required: true
                    },
                    'last_name': {
                        required: true
                    },
                    'email': {
                        required: true,
                        email: true
                    },
                    'phone': {
                        required: true,
                        hiddenPhone: true
                    }
                }
            } else {
                rules = {
                    company: {
                        required: true
                    },
                    company_size: {
                        required: true
                    },
                    city: {
                        required: true
                    },
                    website: {
                        url: true,
                        required: false
                    },
                    description: {
                        required: true
                    },
                    position: {
                        required: true
                    }
                }
            }

            var validationRules = {
                rules: rules,
                messages: {
                    'first_name': {
                        required: 'Укажите имя'
                    },
                    'last_name': {
                        required: 'Укажите фамилию'
                    },
                    'email': {
                        required: 'Укажите электронную почту',
                        email: 'Заполнено некорректно'
                    },
                    'phone': {
                        required: 'Укажите телефон',
                        hiddenPhone: 'Неверный формат номера'
                    },
                    'company': {
                        required: 'Укажите компанию'
                    },
                    'company_size': {
                        required: 'Укажите размер компании'
                    },
                    'city': {
                        required: 'Укажите город'
                    },
                    'website': {
                        url: 'Неверный формат адреса сайта'
                    },
                    'description': {
                        required: 'Укажите описание'
                    },
                    'position': {
                        required: 'Укажите должность'
                    }
                },

                highlight: function(element, errorClass, validClass) {
                    $(element).closest('.b-form__fields').addClass(fieldErrorClass);
                    $(element).closest('.b-form__fields').removeClass(validClass);
                },

                unhighlight: function(element, errorClass, validClass) {
                    $(element).closest('.b-form__fields').removeClass(fieldErrorClass);
                    $(element).closest('.b-form__fields').addClass(validClass);
                },

                errorPlacement: function (error, element) {
                    error.addClass(errorMessageClass);

                    $(element)
                        .closest('.b-form__fields')
                        .addClass(fieldErrorClass)
                        .removeClass('_state_valid')
                        .find('.js-form-error').append(error);
                },

                onkeyup: function (element, event) {
                    var $currStep = $registrationStep.filter(':visible');

                    if ( event.which === 9 && this.elementValue(element) === '' ) {
                        return;
                    } else if ( element.name in this.submitted || element === this.lastElement ) {
                        this.element(element);
                    }

                    this.checkForm();

                    if ( this.valid() ) {
                        isValid = true;

                        $currStep.find($formBtn).removeClass(disabledBtnClass);
                    } else {
                        isValid = false;

                        $currStep.find($formBtn).addClass(disabledBtnClass);
                    }
                },

                onclick: function (element, event) {
                    var $currStep = $registrationStep.filter(':visible');

                    // click on selects, radiobuttons and checkboxes
                    if ( element.name in this.submitted ) {
                        this.element(element);

                        // or option elements, check parent select in that case
                    } else if ( element.parentNode.name in this.submitted ) {
                        this.element(element.parentNode);
                    }

                    this.checkForm();

                    if ( this.valid() ) {
                        isValid = true;

                        $currStep.find($formBtn).removeClass(disabledBtnClass);
                    } else {
                        isValid = false;

                        $currStep.find($formBtn).addClass(disabledBtnClass);
                    }
                },

                submitHandler: function() {
                    var $currStep = $registrationStep.filter(':visible');

                    if ( isValid && !$currStep.find($formBtn).filter('.' + disabledBtnClass).length ) {
                        if( $('.js-registration-box').eq(0).is(':visible') ) {
                            steps(2);
                            $('.js-registration-name').text($('.js-field-name').val() + ', рады знакомству!');
                        }
                    }

                    return false;
                },

                errorClass: fieldErrorClass,
                errorElement: 'span',
                validClass: '_state_valid'
            };

            form.validate(validationRules);
        };
    });