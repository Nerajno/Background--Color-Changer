// random color genBtn
 const rndmClrGen = () => {
     const randomColor = Math.floor(Math.random()*167777215).toString(16);
     document.body.style.backgroundColor = "#"+randomColor;
     color.innerHTML = "#"+randomColor;
 }

 //got help from => https://css-tricks.com/snippets/javascript/random-hex-color/
 randomColorGen.addEventListener("click", rndmClrGen);
 rndmClrGen();