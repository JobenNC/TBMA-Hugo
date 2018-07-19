$(document).ready(function() {
    $('#datepicker').datepicker();

    var forms = document.getElementsByClassName('customForm');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        
        var firstName = event.srcElement[0].value;
        var lastName = event.srcElement[1].value;
        var email = event.srcElement[2].value;
        var emailConfirm = event.srcElement[3].value;
        var comment = event.srcElement[4].value;
        var date = event.srcElement[5].value;

        console.log(firstName + lastName + email + comment + date);
        console.log($("#lastName"));

        console.log(event.srcElement[0].value);
        console.log(form);
        console.log(document.getElementById('firstName'));
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          console.log("---INVALID");
        }
        else if (firstName != lastName) {
          console.log("Names don't match");
        }
        else {
            console.log("---VALID");
        }
        form.classList.add('was-validated');
      }, false);
    });
});

function checkTest(input) {
    if (input.value == "good" ||
        input.value == "fine" ||
        input.value == "tired") {
      input.setCustomValidity('"' + input.value + '" is not a feeling.');
   } 
   else if ($("#lastName")[0].value != input.value) {
       input.setCustomValidity("This value doesn't match the last name!");
   }
   else {
      // input is fine -- reset the error message
      input.setCustomValidity("");
    }
  }

function checkEmail(input) {
    if ($("#email")[0].value != input.value) {
       input.setCustomValidity("Doesn't match the email");
   }
   else {
      // input is fine -- reset the error message
      input.setCustomValidity("");
    }
  }