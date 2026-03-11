const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let message = document.getElementById("message");

if(password === confirmPassword){

message.style.color="green";
message.textContent="Registration Successful!";

}else{

message.style.color="red";
message.textContent="Passwords do not match";

}

});