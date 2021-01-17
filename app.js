// random color via the btn function
const rndmClrGen = async () => {
  
  const randomColor = Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  const colorUrl =
    "https://www.thecolorapi.com/id?hex=" + randomColor + "&format=json";
  try {
    const response = await fetch(colorUrl);
    const body = await response.text();
    let parseBody = JSON.parse(body);
    //console.log(parseBody ,parseBody.name.value);
    color.innerHTML = "The color name is "+ parseBody.name.value+".";
    colorName.innerHTML = "The color hex code  is #" + randomColor +".";
  } catch (error) {
    console.log(error);
  }
};

// Input color button function
// const colorInputSearch = async () => {
//   let textBoxSubmitValue = document.getElementById("colorInput").value;
//   console.log(textBoxSubmitValue);
//   const colorUrl = "https://www.thecolorapi.com/id?name=" + textBoxSubmitValue +"&format=json";
//   //console.log(colorUrl);
//   try {
//     const response = await(colorUrl);
//     const body = await response.text();
//     console.log(body);
    
//   } catch (error) {
//     console.warn(error);
//   }
// }



//Random color button
randomColorGen.addEventListener("click", rndmClrGen);

//Input submission btn
inputSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let textBoxtSubmitValue = document.getElementById("colorInput").value
  document.body.style.backgroundColor = textBoxtSubmitValue;
});


//Reset color Background
resetBackGroundColor.addEventListener("click", (e) =>{
   e.preventDefault();
   window.location.reload();
   $('#colorForm').trigger("reset");
}); 
