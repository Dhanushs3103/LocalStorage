let submit = document.getElementById("submit");
let userName = document.getElementById("name");
let age = document.getElementById("age");
let root = document.getElementById("root");
let retriveBtn = document.querySelector(".btn");

submit.addEventListener("click", () => {
   if(userName.value == "" || age.value == ""){
      alert("Please Fill the Details");
   }
   else {
     retriveBtn.style.display = "block";
   }

   localStorage.setItem("name", JSON.stringify(userName.value));
   localStorage.setItem("age", JSON.stringify(age.value));
   userName.value ="";
   age.value ="";

   
})

