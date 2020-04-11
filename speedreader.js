"use strict";

(function () {
  /* web에 load */
  function scriptload() {
    /* start button click */
    let sp = document.getElementById("start");
    sp.addEventListener("click", showdiv);
    /*     sp.addEventListener("click", timer);
     */
    /* fontsize resize */
    let medi = document.getElementById("Medium");
    medi.addEventListener("click", medium);

    let bigfont = document.getElementById("Big");
    bigfont.addEventListener("click", big);

    let biggerfont = document.getElementById("Bigger");
    biggerfont.addEventListener("click", bigger);
    /* ------------------------------------------------- */

    /* start button click-->disabled */
    let startclick = document.getElementById("start");
    startclick.addEventListener("click", begin);
    startclick.addEventListener("click", undo2);

    /* stop button click-->disabled */
    let stopclick = document.getElementById("stop");
    stopclick.addEventListener("click", begin2);
    stopclick.addEventListener("click", undo);
    stopclick.addEventListener("click", blank);
    stopclick.addEventListener("click", done);
  }

  /* <div>에 text 출력 */
  function showdiv() {
    let word = document.getElementById("inputtxt").value;
    let arr = word.split(/[ \t\n]+/); /* array */

    let settxt = document.getElementById("showtxt");
    let index = 0;
    if (arr.length) {
      begin = setInterval(function () {
        settxt.innerHTML = arr[index++];
      }, 171);
    }
  }
  /*  timer(arr, "showtxt"); */
  /*   function timer(arrs, id) {}
   */

   function speed() {
     
     
   }
  function done() {
    clearInterval(begin);
  }

  /* <div>에 txt 없애기 */
  function blank() {
    document.getElementById("showtxt").innerHTML = " ";
  }
  /* <div>css변경하기 */
  function medium() {
    document.getElementById("showtxt").style.fontSize = "36pt";
  }
  function big() {
    document.getElementById("showtxt").style.fontSize = "48pt";
  }
  function bigger() {
    document.getElementById("showtxt").style.fontSize = "60pt";
  }
  /* ------------------------------------------------- */

  /* start stop button style */
  /* start clicked */
  function begin() {
    let on = document.getElementById("start");
    on.style.backgroundColor = "lightgray";
    on.disabled = true;
  }
  function undo2() {
    let off = document.getElementById("stop");
    off.style.backgroundColor = "#ffffff";
    off.disabled = false;
  }
  /* stop clicked */
  function undo() {
    let off = document.getElementById("stop");
    off.style.backgroundColor = "lightgray";
    off.disabled = true;
  }
  function begin2() {
    let off = document.getElementById("start");
    off.style.backgroundColor = "#ffffff";
    off.disabled = false;
  }
  function hello() {
    console.log(hello);
  }
  function timer() {
    let num = 1000;
    showdiv();
    /* setInterval(showdiv, num); */
  }

  window.onload = scriptload;
})();
