function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  function showPass(){
    var x = document.getElementById("exampleInputPassword1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }