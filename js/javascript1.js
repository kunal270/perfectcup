$(document).ready(function () {

    $("#login").click(function () {

        email = $("#email").val();
        password = $("#password").val();

        $.ajax({
            type: "POST",
             url: "pcheck.php",
            data: "&email=" + email + "&password=" + password,
            success: function (html) {
                if (html == 'true'){

                    $("#add_err2").html('<div class="alert alert-success">\
                    <strong>Authenticated</strong>\ \
                    </div>');

                window.location.href="index.php";

                }else if(html =='false'){
                    $("#add_err2").html('<div class="alert alert-danger"> \
                    <strong>Authentication</strong> Failure  \ \
                    </div>');

                }else {
                    $("#add_err2").html('<div class=alert alert-danger"> \
                    <strong> Error </strong> Processing Request. Please Try Again. \ \
                    </div>');
                }
            },
            beforeSend:function()
            {
                $("#add_err2").html("loading...");
            }
        });
            return false;
    });
});
