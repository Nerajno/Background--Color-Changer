// random color genBtn
const rndmClrGen = async () => {
  const randomColor = Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  const colorUrl =
    "https://www.thecolorapi.com/id?hex=" + randomColor + "&format=svg";
  try {
    const response = await fetch(colorUrl);
    const body = await response.text();
    color.innerHTML = body;
    colorName.innerHTML = "#" + randomColor;
  } catch (error) {
    console.log(error);
  }
};

let rndnColor = rndmClrGen();

//got help from => https://css-tricks.com/snippets/javascript/random-hex-color/

randomColorGen.addEventListener("click", rndmClrGen);

//TODO ~ Get value of input text
//     ~ Fix the function or make a new function that has two different
//       criteria and run either the random function or query the input.
//  const textColorInput = document.getElementById("colorInput").value;
//console.log(textColorInput);
let searchInput = document.querySelector("#colorSearcher > form > input[type=submit]:nth-child(2)");
 

// if submit btn clicked 
//           run 1 function
// else if random btn clicked 
//      do other thing
// else
//    log this has issue