"use strict";

(function () {
  function scriptload() {
    let sp = document.getElementById("start");
    sp.addEventListener("click", splitword);
  }

  function splitword() {
    let word = document.getElementById("inputtxt").value;
    document.getElementById("showtxt").innerHTML = word;
  }
  window.onload = scriptload;
})();
