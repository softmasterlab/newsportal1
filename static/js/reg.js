$(document).ready(function () {

    let valid = false;
    let regExp1 = /^[a-zA-Z][a-zA-Z0-9_\-]{5,15}$/;
    let regExp2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9_\-]{8,}$/;
    let regExp3 = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    // Проверки корректности введенных данных:
    // ---------------------------------------
    // 1 -> Валидация логина:
    $('#login').blur(function () {
        let _login = $(this).val();
        if (regExp1.test(_login)) {
            // $('#login_ico').attr('src', '../../static/img/ok.png');
            // $('#login_err').text('');
            // Проверка занятости логина:
            $.ajax({
                url:"/account/ajax_reg",
                data:"login=" + _login,
                success:function(result) {
                    if (result.mess == 'занят') {
                        $('#login_ico').attr('src', '../../static/img/cross.png');
                        $('#login_err').text('Логин занят!');
                        valid = false
                    } else {
                        $('#login_ico').attr('src', '../../static/img/ok.png');
                        $('#login_err').text('');
                        valid = true
                    }
                }
            });
            // valid = true;
        } else {
            $('#login_ico').attr('src', '../../static/img/cross.png');
            $('#login_err').text('Логин должен быть буквенно-цифорвым, длиной от 6 до 16 символов');
            valid = false;
        }

    });

    // 2 -> Валидация пароля:
    $('#pass1').blur(function () {
        let _pass1 = $(this).val();
        if (regExp2.test(_pass1)) {
            $('#pass1_ico').attr('src', '../../static/img/ok.png');
            $('#pass1_err').text('');
            valid = true;
        } else {
            $('#pass1_ico').attr('src', '../../static/img/cross.png');
            $('#pass1_err').text('Пароль должен быть строгим буквенно-цифорвым, длиной от 8 символов');
            valid = false;
        }
    });

    // 3 -> Валидация подтверждения:
    $('#pass2').blur(function () {
        let _pass1 = $('#pass1').val();
        let _pass2 = $('#pass2').val();
        if (_pass1 == _pass2) {
            $('#pass2_ico').attr('src', '../../static/img/ok.png');
            $('#pass2_err').text('');
            valid = true;
        } else {
            $('#pass2_ico').attr('src', '../../static/img/cross.png');
            $('#pass2_err').text('Пароли не совпадают!');
            valid = false;
        }
    });

    // 4 -> Валидация E-Mail:
    $('#email').blur(function () {
        let _email = $(this).val();
        if (regExp3.test(_email)) {
            $('#email_ico').attr('src', '../../static/img/ok.png');
            $('#email_err').text('');
            valid = true;
        } else {
            $('#email_ico').attr('src', '../../static/img/cross.png');
            $('#email_err').text('E-Mail должен соответствовать шаблону account@domain.type');
            valid = false;
        }
    });

    // Сброс сообщений об ошибках:
    // ---------------------------
    $('#login').focus(function () {
        $('#login_ico').attr('src', '../../static/img/question.png');
        $('#login_err').text('');
    });

    $('#pass1').focus(function () {
        $('#pass1_ico').attr('src', '../../static/img/question.png');
        $('#pass1_err').text('');
    });

    $('#pass2').focus(function () {
        $('#pass2_ico').attr('src', '../../static/img/question.png');
        $('#pass2_err').text('');
    });

    $('#email').focus(function () {
        $('#email_ico').attr('src', '../../static/img/question.png');
        $('#email_err').text('');
    });

    // Определение статуса валидности всех полей:
    // ------------------------------------------
    $('#submit').click(function () {
        if (valid == true) {
            $('#form1').attr('onsubmit', 'return true');
        } else {
            $('#form1').attr('onsubmit', 'return false');
            alert('Форма содержит некорректные данные! \nОтправка данных заблокирована!');
        }
    });

    // Сброс данных и индикаторов:
    // ---------------------------
    $('#reset').click(function (event) {
        event.preventDefault();
        $('#login_ico').attr('src', '../../static/img/question.png');
        $('#pass1_ico').attr('src', '../../static/img/question.png');
        $('#pass2_ico').attr('src', '../../static/img/question.png');
        $('#email_ico').attr('src', '../../static/img/question.png');

        $('#login_err').text('');
        $('#pass1_err').text('');
        $('#pass2_err').text('');
        $('#email_err').text('');

        $('#login').val('');
        $('#pass1').val('');
        $('#pass2').val('');
        $('#email').val('');
    });

});
