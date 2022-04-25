// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletAmount = JSON.parse(localStorage.getItem("amount"))||[];
//console.log(walletAmount);
if(walletAmount!=0)
{
     document.getElementById("wallet").innerText=`Wallet Balance ₹ ${walletAmount}`;
}
else
{
     document.getElementById("wallet").innerText=`Wallet Balance ₹ 0`;
    
}

//helper function
// function check1(id)
// {
//      return document.getElementById("id").value ;
// }

function confirm()
{
     let count=1
     let name = document.getElementById("user_name").value;
     let Noseat = document.getElementById("number_of_seats").value;
     // console.log(name,Noseat*100);
     document.getElementById("confirm").style.backgroundColor="green";
     if(Noseat*100<=walletAmount)
     {
          alert("Booking successfull!");
           walletAmount = walletAmount-Noseat*100;
          document.getElementById("wallet").innerText=`Wallet Balance ₹ ${walletAmount}`;
          localStorage.setItem("amount",JSON.stringify(walletAmount))
     }
     else
     {
          alert("Insufficient Balance!");
     }

     window.open("index.html");
         
}
