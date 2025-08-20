
let button = document.querySelector("#btn").addEventListener("click", function(){
    let input = document.getElementById("inp").value;
    if(input == ""){
        alert("Message is Empty!! \nClick On the Contact Number for more Information.");
    }else{
    alert("Thank You For Contacting Us, Click on the Contact Number For more Information.");
    }
   
});
input.value = "";