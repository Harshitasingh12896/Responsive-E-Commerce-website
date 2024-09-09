let card = document.querySelector(".trend");
 // console.log(card);
 let card1 = document.getElementById("trendSec");
 let about = document.querySelector(".about");
 let contact=document.querySelector("contact");


let blog=document.querySelector(".trends");
let mainPage = document.querySelector(".main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
}


function shops(){
 mainPage.style.display="none";
 blog.style.display="none";
 document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"




// card.style.display="none";

}
function blogs(){
    mainPage.style.display="none";
    card.style.display="block";
    card1.style.display="block";

   blog.style.display="block";
   about.style.display="none";

   document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"

}

function abouts(){
    mainPage.style.display="none";
    card.style.display="block";
    card2.style.display="block";
   blog.style.display="block";
   about.style.display="block"

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"

}
function contacts(){
    mainPage.style.display="none";
    card.style.display="block";
    card2.style.display="block";
   blog.style.display="block";
   about.style.display="block";
   contact.style.display="block"

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"
document.getElementById("contact").style.color="black"

}
function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none"
    document.querySelector(".cart").style.display="flex"
}


function addCart(){
    alert("Added To Cart");
    location.reload()
}