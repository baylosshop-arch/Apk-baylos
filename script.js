// ==========================
// BAYLOS SHOP
// script.js
// ==========================

// Data Produk
const products = [
{
id:1,
nama:"Produk 1",
harga:120000
},
{
id:2,
nama:"Produk 2",
harga:99000
},
{
id:3,
nama:"Produk 3",
harga:150000
},
{
id:4,
nama:"Produk 4",
harga:175000
},
{ 
id:5,
nama:"Produk 5",
harga:275000
}
];

// Keranjang
let cart = [];

// Tombol Beli
const buttons = document.querySelectorAll(".card button");

buttons.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

cart.push(products[index]);

alert(products[index].nama+" berhasil ditambahkan ke keranjang");

console.log(cart);

});

});

// ==========================
// SEARCH
// ==========================

const searchInput=document.querySelector(".menu input");

searchInput.addEventListener("keyup",()=>{

let keyword=searchInput.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let nama=card.querySelector("h3").innerText.toLowerCase();

if(nama.indexOf(keyword)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

// ==========================
// DARK MODE
// ==========================

const darkButton=document.createElement("button");

darkButton.innerHTML="🌙";

darkButton.style.marginLeft="10px";

document.querySelector(".menu").appendChild(darkButton);

let dark=false;

darkButton.onclick=()=>{

dark=!dark;

if(dark){

document.body.style.background="#111";

document.body.style.color="#fff";

darkButton.innerHTML="☀";

}else{

document.body.style.background="#f8f7f3";

document.body.style.color="#222";

darkButton.innerHTML="🌙";

}

};

// ==========================
// TOTAL BELANJA
// ==========================

const totalBox=document.createElement("div");

totalBox.style.position="fixed";

totalBox.style.bottom="20px";

totalBox.style.right="20px";

totalBox.style.background="#0f1f3d";

totalBox.style.color="white";

totalBox.style.padding="15px";

totalBox.style.borderRadius="10px";

totalBox.innerHTML="Keranjang : 0";

document.body.appendChild(totalBox);

function updateCart(){

let total=0;

cart.forEach(item=>{

total+=item.harga;

});

totalBox.innerHTML=

"🛒 "+cart.length+

"<br>Total : Rp "+total.toLocaleString("id-ID");

}

// Update ketika klik beli

buttons.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

cart.push(products[index]);

updateCart();

});

});

// ==========================
// NOTIFIKASI
// ==========================

function toast(text){

const notif=document.createElement("div");

notif.innerHTML=text;

notif.style.position="fixed";

notif.style.top="20px";

notif.style.right="20px";

notif.style.background="#16a34a";

notif.style.color="white";

notif.style.padding="15px";

notif.style.borderRadius="10px";

notif.style.zIndex="999";

document.body.appendChild(notif);

setTimeout(()=>{

notif.remove();

},2000);

}

buttons.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

toast(products[index].nama+" berhasil ditambahkan");

});

});

// ==========================
// LOGIN
// ==========================

const login=document.querySelector(".login");

login.onclick=()=>{

alert("Halaman Login akan dibuat pada tahap berikutnya.");

};

// ==========================
// HERO BUTTON
// ==========================

document.querySelector(".hero button").onclick=()=>{

document.getElementById("produk").scrollIntoView({

behavior:"smooth"

});

};
