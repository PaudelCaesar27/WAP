// var x = 5;
// var y = test();
// var b = { x: 4 };
// var z = y.bind(b);
// z();
// function test() {
//     console.log(this);
//     console.log(x);
//     var z = function() {
//         var x = 3;
//         console.log(this);
//         console.log(this.x);
//     }
//     var x = 8;
//     z();
//     return z;
// }

// Based on the following HTML form, write JavaScript code that uses the revealing module pattern to create a module
// called VALIDATOR.
//
// Your module should have one public function called "validate()" that validates the HTML form by calling two
// private functions:  validateFirstName() and validateLastName().
//
//     Both validateFirstName() and validateLastName() return false if the field they check has value === "",
//     otherwise they return true. The public validate() method should only return true if both private functions
// returned true.

var module = (function(){
    var firstname = "";
    var lastname = "";
    function validateFirstName(fname){
        firstname = document.getElementById('[name="first"]').value;
        if(firstname === "")
            return false;
        else
            return true;
    }
    function validateLastName(lname){
        lastname = document.getElementById('[name="last"]').value;
        if(lastname === "")
            return false;
        else
            return true;
    }
    function validate(){
        if((validateFirstName() && validateLastName()) === true)
            return true;
        else
            return false;
    }
    return{
        validate: validate
    }

})();