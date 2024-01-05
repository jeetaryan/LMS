var sign_in = function () {

    var self = this;
    //Mandatory function to be implemented here
    var initialization = function () {
        $("#registration_form").hide();
    }
    var registration = function () {
        $(document).on("click", "#btnLogin", login);
        $(document).on("click", "#registration_link", registration_show);
        $(document).on("click", "#login_link", login_show);

    }
     self.init = function () {
        initialization();
        registration();
    }
}
var login=function (event){

// Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
 // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
        console.log(form);
          $.ajax({
                   type : 'POST',
                   url : "/test",
                   dataType: 'json',
                   contentType: 'application/json;charset=UTF-8',
                   data: {"data":"forms"},
                   success: function (result) {
                        console.log("hello success");
                   },
                   error: function (err) {
                        console.log(err.text);
                   }
          });
        }
        form.classList.add('was-validated')
    });
}


//registration for show

var registration_show = function(){
    $("#login_form").hide();
    $("#registration_form").show();
}
var login_show = function(){
    $("#login_form").show();
    $("#registration_form").hide();
}