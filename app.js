function loadPage() {
  var body = document.querySelector("body");
  var h1 = document.getElementById("secondH1");
  var divUl = document.getElementById("ulContainer");
  var divMeme = document.getElementById("memeContainer");
  var divVideo = document.getElementById("musicVideo");
  var ul = document.createElement("ul");
  var button = document.getElementById("bestQuote");

  // queue = new createjs.LoadQueue(false);
  // queue.installPlugin(createjs.Sound);
  // queue.addEventListener("complete", getBestQuote);
  // queue.loadManifest([{ id: "sound", src: "HowSway.mp3" }]);

  document.getElementById("secondH1").style.visibility = "hidden";
  document.getElementById("memeContainer").style.visibility = "hidden";
  document.getElementById("ulContainer").style.visibility = "hidden";
  document.getElementById("musicVideo").style.visibility = "visible";

  document.getElementById("fetchBtn").addEventListener("click", fetchAPI);
  document.getElementById("bestQuote").addEventListener("click", getBestQuote);

  var quoteList = [];

  function fetchAPI() {
    fetch("quotes.json")
      .then((res) => res.json())
      .then((data) => {
        quoteList = data;
        for (var i = 0; i < quoteList.length; i++) {
          var kanyeQuoteList = document.createElement("li");
          kanyeQuoteList.textContent = quoteList[i];
          ul.appendChild(kanyeQuoteList);
        }
        divUl.appendChild(ul);
        document.body.appendChild(divUl);
        document.querySelector("#ulContainer").style.visibility = "visible";
        //createjs.Sound.addEventListener("loadComplete", getBestQuote);
      })
      .catch((err) => console.log(err));
  }

  function getBestQuote() {
    // createjs.Sound.addEventListener("loadComplete", (e) => {
    //   document.querySelector("body").style.visibility = "hidden";
    //   document.querySelector("#secondH1").style.visibility = "visible";
    //   var button = document.getElementById("refreshBtn");
    //   document.getElementById("refreshBtn").style.visibility = "visible";
    //   document.querySelector("#memeContainer").style.visibility = "visible";
    //   document.querySelector("#ulContainer").style.visibility = "hidden";
    //   createjs.Sound.play("sound");
    // });
    var audio = new Audio("HowSway.mp3");
    audio.play();
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#secondH1").style.visibility = "visible";
    var button = document.getElementById("refreshBtn");
    document.getElementById("refreshBtn").style.visibility = "visible";
    document.querySelector("#memeContainer").style.visibility = "visible";
    document.querySelector("#ulContainer").style.visibility = "hidden";
    // createjs.Sound.play("sound");
  }
}
