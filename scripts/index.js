// Store the wallet amount to your local storage with key "amount"
let Amount1 = JSON.parse(localStorage.getItem("amount"))||[];
if(Amount1!=0)
{
     document.getElementById("wallet").innerText=Amount1;
}
 function addAmount()
 {
     
     let Amount = document.getElementById("amount").value ;
    
     let x = Number(Amount1)+Number(Amount);
     localStorage.setItem("amount",JSON.stringify(x));
     // let Total = document.createElement("p");
     // Total.innerText=x;
     document.getElementById("wallet").innerText=x;
     window.location.reload();//to refresh the page;
     
 
     
 }