/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function domains(p, a, n) {
  let newDomain = [];
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < a.length; j++) {
      for (let k = 0; k < n.length; k++) {
        newDomain.push(`${p[i]}${a[j]}${n[k]}.com`);
      }
    }
  }

  return newDomain;
}

function capFirst(str) {
  return ` ${str.charAt(0).toUpperCase() + str.slice(1)}\n`;
}

function addDomains(nD) {
  for (let i = 0; i < nD.length; i++) {
    document.querySelector("#domain").innerHTML += `${nD[i]
      .charAt(0)
      .toUpperCase() + nD[i].slice(1)}\n`;
    //console.log(nD[i]);
  }
}

// document.querySelector("#domain").innerHTML = domains(pronoun, adj, noun);

window.onload = function() {
  //write your code here
  addDomains(domains(pronoun, adj, noun));
  console.log("Hello Rigo from the console!");
};
