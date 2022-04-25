// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let walletAmount = JSON.parse(localStorage.getItem("amount"))||[];
//console.log(walletAmount);
let id;
if(walletAmount!=0)
{
     document.getElementById("wallet").innerText=`Wallet Balance ₹ ${walletAmount}`;
}
else
{
     document.getElementById("wallet").innerText=`Wallet Balance ₹ 0`;
}

// Fetching the data from API

let movies_div = document.getElementById("movies1");

async function searchMOvies()
{
    try{
     const query =document.getElementById("search").value ;
     //console.log(query);
     let res = await fetch(`https://www.omdbapi.com/?apikey=7528ea93&s=${query}`);
     let data = await res.json();
     var searchData = localStorage.setItem("SearchMovies",JSON.stringify(data))
     
//      let movie_data= JSON.parse(localStorage.getItem("SearchMovies"))||[];
//     console.log(movie_data.Search)
window.location.reload();


     const movies = data.Search;
     return movies;
    }
    catch(err)
    {
         console.log(err);
    }
}


let movie_data= JSON.parse(localStorage.getItem("SearchMovies"))||[];
    //console.log(movie_data.Search)
   // window.location.reload();
    let x = movie_data.Search;
    x.map(function(el){
         //console.log(el);
     //     window.location.reload();
         let box1= document.createElement("div");
         let poster=document.createElement("img");
         poster.src=el.Poster;
         let name = document.createElement("p");
         name.innerText=el.Title; 
         let Price = document.createElement("h4")
         Price.innerText="₹ 100/"
         Price.setAttribute("class","price")
         let btn = document.createElement("button");
         btn.innerText="Book Now";
         btn.setAttribute("class","book_now")
         box1.append(poster,name,Price,btn)
         document.getElementById("movies").append(box1)

      btn.addEventListener("click",function(){
           addToCart(el);
      })
    });

let cartData = [];
function addToCart(el)
{
cartData.push(el);
localStorage.setItem("movie",JSON.stringify(cartData));
window.open("checkout.html");
}





//Adding the movies 
// function appendMovies(data)
// {
// movies_div.innerHTML=null;
// data.forEach(function(el){
//      let p = document.createElement("p");
//      p.innerText=el.Title;
//      movies_div.append(p);
    
// });
// }

//Assemble in a single function 
async function main()
{
     let data = await searchMOvies();
     if(data == undefined)
     {
          return false;
     }
     appendMovies(data);
}

//implement debouncing
function debounce(fun,time)
{
     if(id)
     {
          clearTimeout(id);
     }
     id=setTimeout(function(){
          fun();
     },time)
}