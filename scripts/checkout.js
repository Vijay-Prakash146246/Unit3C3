// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletAmount = JSON.parse(localStorage.getItem("amount"))||[];
//console.log(walletAmount);
let id;
if(walletAmount!=0)
{
     document.getElementById("wallet").innerText=walletAmount;
}
else
{
     document.getElementById("wallet").innerText=0;
}
