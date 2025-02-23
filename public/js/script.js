(function () {
  "use strict";

  // Fetch all the forms with class 'needs-validation'
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission if the form is invalid
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission
          event.stopPropagation(); // Stop event propagation
        }

        // Add Bootstrap validation styles
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
