// random color genBtn
 const rndmClrGen = async() => {
     const randomColor = Math.random().toString(16).slice(2,8);
     document.body.style.backgroundColor = "#"+randomColor;
     const colorUrl = "https://www.thecolorapi.com/id?hex="+randomColor+"&format=svg";
     try {
         const response = await fetch(colorUrl);
         const body = await response.text();
         color.innerHTML = body;
         colorName.innerHTML = "#"+randomColor;
     } catch (error) {
         console.log(error);
     } 
 }; 
 
 let rndnColor = rndmClrGen();

 //got help from => https://css-tricks.com/snippets/javascript/random-hex-color/

 randomColorGen.addEventListener("click", rndmClrGen);
 
// need to prevent random clicks to get randon color
 //  randomColorGen.addEventListener("click", rndmClrGen(){
// 	// If the clicked element doesn't have the right selector, bail
//     if (e.target.matches(".randomColorGen"));
//      return;

// 	// Don't follow the link
// 	e.preventDefault();

// 	// Log the clicked element in the console
// 	console.log(e.target);

// }, false);

//color finder
