"use strict";

var words = [
    { key: "空", a: "sky" },
    { key: "りんご", a: "apple" },
    { key: "水", a: "water" },
    { key: "火", a: "fire" }
]; 
var stock = [];

let card = document.getElementById("card");
let cardFront = document.getElementById("card-front");
let cardBack = document.getElementById("card-back");
let btn = document.getElementById("btn");

card.addEventListener("click", function() {
    flip();
});

btn.addEventListener("click", function() {
    next();
});

function flip() {
    card.className = card.className === "" ? "open" : "";
}

function next() {
  if (card.className === "open") {
card.addEventListener("transitionend", setCard);
  flip();
  } else {
    setCard(); 
  }
}

function setCard() {
  var num = Math.floor(Math.random() * words.length);
  cardFront.innerHTML = words[num]["key"];
  cardBack.innerHTML = words[num]["a"];
  card.removeEventListener("transitionend", setCard);
}