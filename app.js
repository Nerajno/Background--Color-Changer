// random color via the btn function
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

// Input color button function to fetch a color from an api
const colorInputSearch = async () => {
  let textBoxSubmitValue = document.getElementById("colorInput").value;
  console.log(textBoxSubmitValue);
  const colorUrl = "https://api.color.pizza/v1/names/"+textBoxSubmitValue;
  console.log(colorUrl);
  try {
    const response = await(colorUrl);
    const body = await response.json();
    console.log(body);
    
  } catch (error) {
    console.warn(error);
  }
}



randomColorGen.addEventListener("click", rndmClrGen);

// let textBoxtSubmit = document.getElementById("inputSubmit");

 let colorSearch = inputSubmit.addEventListener("click", colorInputSearch);




//TODO ~ Get value of input text
//     ~ Fix the function or make a new function that has two different
//       criteria and run either the random function or query the input.
//  const textColorInput = document.getElementById("colorInput").value;
//console.log(textColorInput);
// let searchInput = document.querySelector("#colorSearcher > form > input[type=submit]:nth-child(2)").value;
// console.log(searchInput);
//  inputOptions(params) {
//   if(params =){

//   }else if(){
  
//   }else{
//    console.log("this is broken !!!");   
//   }  
// }

// if submit btn clicked 
//           run 1 function
// else if random btn clicked 
//      do other thing
// else
//    log this has issue

