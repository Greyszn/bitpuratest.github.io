 function validateTextbox() {
    var box = document.getElementById("email");
    

    if (box.value == ""){
        alert("field marked in red cannot be Blank")
        box.focus();
        box.style.backgroundColor = "red";
        return false;
    }
    
    var box2 = document.getElementById("password");

    if ( box2.value == "" || box2.length < 8){
    alert("Password must be at least 8 characters")
    box2.focus();
    box2.style.backgroundColor = "red";
    return false;
    }

    var letterRegex = /[a-zA-Z]/;
    var numberRegex = /[0-9]/;

    if (!letterRegex.test(box2) || !numberRegex.test(box2)){

    
    alert("Password must contain both letters and numbers.");
    return false;
    } 

    // Why does the form not submit even after all conditions are met?
 }


 function ToggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
     dropdown.classList.toggle("show");
 }
    
